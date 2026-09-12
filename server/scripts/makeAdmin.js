import "dotenv/config";
import { connectDB } from "../src/config/db.js";
import User from "../src/models/User.js";
const email=process.argv[2];
if(!email){console.error("Usage: npm run make:admin -- email@example.com");process.exit(1)}
await connectDB();
const user=await User.findOneAndUpdate({email:email.toLowerCase()},{role:"admin"},{new:true});
if(!user){console.error("User not found.");process.exit(1)}
console.log(`${user.email} is now admin.`);
process.exit(0);
