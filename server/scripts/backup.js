/*
 * Database backup: every collection exported as gzipped Extended JSON (types
 * such as ObjectId and Date survive the round trip) into
 * backups/<timestamp>/<collection>.json.gz.
 *
 *   npm run backup                 -> server/backups/<timestamp>/
 *   BACKUP_DIR=/path npm run backup
 *
 * Runs weekly in GitHub Actions (.github/workflows/backup.yml), which keeps the
 * archive as a workflow artifact. Restore one collection with:
 *   gunzip -c users.json.gz | mongoimport --uri "$MONGODB_URI" -c users --jsonArray --mode=upsert
 */
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";
import mongoose from "mongoose";
// EJSON ships with the MongoDB driver Mongoose already depends on.
const { EJSON } = mongoose.mongo.BSON;
import { connectDB } from "../src/config/db.js";

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const root = path.resolve(process.env.BACKUP_DIR || path.join(process.cwd(), "backups"), stamp);
fs.mkdirSync(root, { recursive: true });

await connectDB();
const db = mongoose.connection.db;
const collections = await db.listCollections({}, { nameOnly: true }).toArray();
const summary = {};

for (const { name } of collections) {
  if (name.startsWith("system.")) continue;
  const cursor = db.collection(name).find({});
  let count = 0;
  async function* lines() {
    yield "[\n";
    for await (const doc of cursor) {
      yield (count++ ? ",\n" : "") + EJSON.stringify(doc, { relaxed: false });
    }
    yield "\n]\n";
  }
  await pipeline(Readable.from(lines()), zlib.createGzip(), fs.createWriteStream(path.join(root, `${name}.json.gz`)));
  summary[name] = count;
}

fs.writeFileSync(path.join(root, "manifest.json"), JSON.stringify({ createdAt: new Date().toISOString(), database: db.databaseName, collections: summary }, null, 2));
console.log(JSON.stringify({ backup: root, collections: summary }, null, 2));
await mongoose.disconnect();
