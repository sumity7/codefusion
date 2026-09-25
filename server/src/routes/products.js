import { Router } from "express";

import Product from "../models/Product.js";
import User from "../models/User.js";
import TokenTransaction from "../models/TokenTransaction.js";
import Category from "../models/Category.js";
import Collection from "../models/Collection.js";

import {
  authOptional,
  authRequired,
  adminRequired,
} from "../middleware/auth.js";

const router = Router();

// Shown first, in this order, in the default ("newest") listing — which is what
// the Home featured row and the top of /products use. An explicit sort (price,
// rating, popular) keeps its own order. Products that don't match the current
// filter simply aren't there to pin.
const PINNED_SLUGS = [
  "creative-agency-landing-page",
  "enterprise-delivery-landing-page",
  "ai-music-app-landing-page",
  "editorial-saas-landing-page",
];

function buildPreviewCode(data) {
  const html = String(
    data?.code?.html || ""
  );

  const css = String(
    data?.code?.css || ""
  );

  const javascript = String(
    data?.code?.javascript || ""
  );

  if (!html.trim()) {
    return "";
  }

  const isFullDocument =
    /<!doctype\s+html/i.test(
      html
    ) ||
    /<html\b/i.test(html);

  if (isFullDocument) {
    let output = html;

    const styleRegex =
      /<style\b[^>]*>([\s\S]*?)<\/style>/i;

    const scriptRegex =
      /<script\b[^>]*>([\s\S]*?)<\/script>/i;

    if (css.trim()) {
      if (
        styleRegex.test(output)
      ) {
        output = output.replace(
          styleRegex,
          `<style>
${css}
</style>`
        );
      } else if (
        /<\/head>/i.test(output)
      ) {
        output = output.replace(
          /<\/head>/i,
          `<style>
${css}
</style>
</head>`
        );
      }
    }

    if (javascript.trim()) {
      if (
        scriptRegex.test(
          output
        )
      ) {
        output = output.replace(
          scriptRegex,
          `<script>
${javascript}
</script>`
        );
      } else if (
        /<\/body>/i.test(output)
      ) {
        output = output.replace(
          /<\/body>/i,
          `<script>
${javascript}
</script>
</body>`
        );
      }
    }

    return output;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>CodeFusion Product Preview</title>

  <style>
${css}
  </style>
</head>

<body>
${html}

<script>
${javascript}
</script>
</body>
</html>`;
}

function publicProduct(product) {
  const obj =
    product?.toObject
      ? product.toObject()
      : product;

  // Premium payloads never leave the server unauthorized. `code` and `prompt` are
  // only ever returned by the token-gated copy endpoints. `previewCode` stays so the
  // sandboxed iframe can render a preview for guests.
  const {
    code,
    prompt,
    ...safe
  } = obj;

  return {
    ...safe,

    hasPrompt: Boolean(prompt),

    previewCode:
      obj.previewCode || "",
  };
}

/*
 * ADMIN — ALL PRODUCTS
 */
router.get(
  "/admin/all",
  authRequired,
  adminRequired,
  async (req, res, next) => {
    try {
      const products =
        await Product.find()
          .sort({
            createdAt: -1,
          });

      res.json({
        products,
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * ADMIN — CREATE PRODUCT
 */
router.post(
  "/admin",
  authRequired,
  adminRequired,
  async (req, res, next) => {
    try {
      const previewCode =
        buildPreviewCode(
          req.body
        );

      const data = {
        ...req.body,

        previewMode:
          previewCode
            ? "source"
            : req.body
                ?.previewMode,

        previewCode,

        code: {
          html:
            req.body?.code
              ?.html || "",

          css:
            req.body?.code
              ?.css || "",

          javascript:
            req.body?.code
              ?.javascript || "",
        },

        lastUpdated:
          new Date(),
      };

      const product =
        await Product.create(
          data
        );

      res.status(201).json({
        product,
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * ADMIN — UPDATE PRODUCT
 */
router.put(
  "/admin/:id",
  authRequired,
  adminRequired,
  async (req, res, next) => {
    try {
      const previewCode =
        buildPreviewCode(
          req.body
        );

      const data = {
        ...req.body,

        previewMode:
          previewCode
            ? "source"
            : req.body
                ?.previewMode,

        previewCode,

        code: {
          html:
            req.body?.code
              ?.html || "",

          css:
            req.body?.code
              ?.css || "",

          javascript:
            req.body?.code
              ?.javascript || "",
        },

        lastUpdated:
          new Date(),
      };

      const product =
        await Product.findByIdAndUpdate(
          req.params.id,
          data,
          {
            new: true,
            runValidators: true,
          }
        );

      if (!product) {
        return res
          .status(404)
          .json({
            message:
              "Product not found.",
          });
      }

      res.json({
        product,
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * ADMIN — DUPLICATE PRODUCT
 */
router.post(
  "/admin/:id/duplicate",
  authRequired,
  adminRequired,
  async (req, res, next) => {
    try {
      const source =
        await Product.findById(
          req.params.id
        ).lean();

      if (!source) {
        return res
          .status(404)
          .json({
            message:
              "Product not found.",
          });
      }

      delete source._id;
      delete source.createdAt;
      delete source.updatedAt;

      const base =
        `${source.slug}-copy`;

      let slug = base;
      let counter = 2;

      while (
        await Product.exists({
          slug,
        })
      ) {
        slug =
          `${base}-${counter++}`;
      }

      const product =
        await Product.create({
          ...source,

          slug,

          name:
            `${source.name} Copy`,

          isPublished: false,

          previewCode:
            buildPreviewCode(
              source
            ),

          lastUpdated:
            new Date(),
        });

      res.status(201).json({
        product,
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * ADMIN — DELETE PRODUCT
 */
router.delete(
  "/admin/:id",
  authRequired,
  adminRequired,
  async (req, res, next) => {
    try {
      const deleted =
        await Product.findByIdAndDelete(
          req.params.id
        );

      if (!deleted) {
        return res
          .status(404)
          .json({
            message:
              "Product not found.",
          });
      }

      res.json({
        message:
          "Product deleted.",
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * PUBLIC — CATEGORIES WITH COUNTS
 */
router.get(
  "/categories",
  async (_req, res, next) => {
    try {
      const [categories, counts] = await Promise.all([
        Category.find({ isActive: true }).sort({ name: 1 }).lean(),
        Product.aggregate([
          { $match: { isPublished: true } },
          { $group: { _id: "$category", count: { $sum: 1 } } },
        ]),
      ]);

      const countMap = Object.fromEntries(counts.map((row) => [row._id, row.count]));
      const known = new Set(categories.map((cat) => cat.name));

      const result = categories.map((cat) => ({ name: cat.name, slug: cat.slug, count: countMap[cat.name] || 0 }));

      for (const row of counts) {
        if (row._id && !known.has(row._id)) {
          result.push({ name: row._id, slug: row._id.toLowerCase().replace(/[^a-z0-9]+/g, "-"), count: row.count });
        }
      }

      const total = counts.reduce((sum, row) => sum + row.count, 0);

      res.json({ categories: result, total });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * PUBLIC — ACTIVE COLLECTIONS
 * Lets the storefront tell an unknown collection slug (404) apart from a real
 * collection that happens to have no products yet.
 */
router.get(
  "/collections",
  async (_req, res, next) => {
    try {
      const collections = await Collection.find({ isActive: true }).sort({ name: 1 }).select("name slug description").lean();
      res.json({ collections: collections.map(({ name, slug, description }) => ({ name, slug, description })) });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * PUBLIC — PRODUCT LIST
 */
router.get(
  "/",
  async (req, res, next) => {
    try {
      const {
        category,
        search,
        collection,
        sort = "newest",
        featured,
        plan,
      } = req.query;

      const filter = {
        isPublished: true,
      };

      if (
        category &&
        category !== "All"
      ) {
        filter.category =
          category;
      }

      if (
        collection &&
        collection !== "all"
      ) {
        // URLs carry the slug lowercased (/collections/free) while the stored
        // values are title case ("Free"), so an exact match never hit.
        const escaped = String(collection).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const name = new RegExp(`^${escaped}$`, "i");

        filter.$or = [
          { collection: name },
          { collections: name },
        ];
      }

      if (
        featured === "true"
      ) {
        filter.isFeatured = true;
      }

      if (plan === "free") {
        filter.productType = "FREE";
      } else if (plan === "plan") {
        filter.productType = { $in: ["PRO", "PREMIUM"] };
      } else if (plan === "verified") {
        filter.isVerified = true;
      }

      let query = search
        ? Product.find({
            ...filter,
            $text: {
              $search: search,
            },
          })
        : Product.find(filter);

      if (
        sort === "popular"
      ) {
        query =
          query.sort({
            downloadCount:
              -1,
          });
      } else if (
        sort === "rating"
      ) {
        query =
          query.sort({
            rating: -1,
          });
      } else if (
        sort === "price" ||
        sort === "price-asc"
      ) {
        query =
          query.sort({
            priceAmount: 1,
          });
      } else if (
        sort === "price-desc"
      ) {
        query =
          query.sort({
            priceAmount: -1,
          });
      } else {
        query =
          query.sort({
            createdAt: -1,
          });
      }

      const products =
        await query.lean();

      // `rating` defaults to 5 before a product has any approved reviews, so a
      // plain sort would rank unreviewed products above reviewed ones.
      if (sort === "rating") {
        const score = (p) => (Number(p.reviewCount) > 0 ? Number(p.rating) || 0 : -1);
        products.sort((a, b) => score(b) - score(a) || (Number(b.reviewCount) || 0) - (Number(a.reviewCount) || 0));
      }

      if (!["popular", "rating", "price", "price-asc", "price-desc"].includes(sort)) {
        const rank = (p) => {
          const i = PINNED_SLUGS.indexOf(p.slug);
          return i === -1 ? PINNED_SLUGS.length : i;
        };
        // Array#sort is stable, so everything unpinned keeps its newest-first order.
        products.sort((a, b) => rank(a) - rank(b));
      }

      const [
        categories,
        collections,
      ] =
        await Promise.all([
          Product.distinct(
            "category",
            filter
          ),

          Product.distinct(
            "collection",
            filter
          ),
        ]);

      res.json({
        products:
          products.map(
            publicProduct
          ),

        categories,

        collections,
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * PUBLIC — PRODUCT DETAIL
 */
router.get(
  "/:slug",
  async (req, res, next) => {
    try {
      const product =
        await Product.findOne({
          slug: req.params.slug,
          isPublished: true,
        }).lean();

      if (!product) {
        return res
          .status(404)
          .json({
            message:
              "Product not found.",
          });
      }

      res.json({
        product:
          publicProduct(
            product
          ),
      });
    } catch (error) {
      next(error);
    }
  }
);

/*
 * PROTECTED — SOURCE CODE
 */
router.get("/:slug/source", (_req, res) => res.status(410).json({ message: "Source access has moved to metered copy actions." }));

async function copyContent(req, res, next, actionType) {
    try {
      const product =
        await Product.findOne({
          slug: req.params.slug,
          isPublished: true,
        });

      if (!product) {
        return res
          .status(404)
          .json({
            message:
              "Product not found.",
          });
      }

      const content = actionType === "PROMPT_COPY" ? product.prompt : { html: product.code?.html || "", css: product.code?.css || "", javascript: product.code?.javascript || "" };

      if (product.productType === "FREE") {
        return res.json({ content, remaining: null });
      }

      const rawKey = req.get("Idempotency-Key");
      const idempotencyKey = typeof rawKey === "string" && /^[A-Za-z0-9_-]{8,100}$/.test(rawKey) ? rawKey : null;

      // A repeat of a request that was already charged gets the content again
      // without spending another token.
      const replay = async () => {
        const previous = await TokenTransaction.findOne({ userId: req.user.id, idempotencyKey }).lean();
        if (!previous) return false;
        if (String(previous.productId) !== String(product._id) || previous.actionType !== actionType) {
          res.status(409).json({ message: "This request key was already used for a different action." });
          return true;
        }
        const current = await User.findById(req.user.id).select("tokenBalance").lean();
        res.json({ content, remaining: current?.tokenBalance ?? 0 });
        return true;
      };

      if (idempotencyKey && (await replay())) return;

      const now = new Date();

      // Single conditional update = atomic. Two concurrent copies can never spend
      // the same token: whichever request loses the race fails the tokenBalance
      // guard and gets rejected below.
      const user = await User.findOneAndUpdate(
        { _id: req.user.id, subscriptionStatus: "ACTIVE", subscriptionEndDate: { $gt: now }, tokenBalance: { $gte: 1 } },
        { $inc: { tokenBalance: -1 } },
        { new: true }
      );

      if (!user) {
        // Re-read only to classify *why* it failed — this can never grant access.
        const current = await User.findById(req.user.id).select("subscriptionStatus subscriptionEndDate tokenBalance").lean();
        const subscribed = current?.subscriptionStatus === "ACTIVE" && current?.subscriptionEndDate > now;

        if (!subscribed) {
          return res.status(403).json({
            code: "SUBSCRIPTION_REQUIRED",
            message: "Subscribe to access premium boilerplates, source code and prompts.",
          });
        }

        return res.status(409).json({
          code: "NO_TOKENS",
          message: "Your monthly token balance has been used. Renew your subscription or wait for your next token cycle.",
          remaining: 0,
        });
      }

      try {
        await TokenTransaction.create({ userId: user._id, productId: product._id, productName: product.name, actionType, tokensUsed: 1, ...(idempotencyKey ? { idempotencyKey } : {}) });
      } catch (error) {
        // Two copies of the same request raced past the replay check and both
        // took a token; the unique key index let only one record through. Give
        // this one's token back and answer as a replay.
        if (error?.code === 11000 && idempotencyKey) {
          await User.updateOne({ _id: user._id }, { $inc: { tokenBalance: 1 } });
          if (await replay()) return;
        }
        throw error;
      }
      res.json({ content, remaining: user.tokenBalance });
    } catch (error) {
      next(error);
    }
  }
router.post("/:slug/copy-code", authRequired, (req, res, next) => copyContent(req, res, next, "CODE_COPY"));
router.post("/:slug/copy-prompt", authRequired, (req, res, next) => copyContent(req, res, next, "PROMPT_COPY"));

export default router;
