import { Router } from "express";

import Product from "../models/Product.js";
import Order from "../models/Order.js";

import {
  authOptional,
  authRequired,
  adminRequired,
} from "../middleware/auth.js";

const router = Router();

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

  const {
    code,
    ...safe
  } = obj;

  return {
    ...safe,

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
        filter.$or = [
          {
            collection,
          },
          {
            collections:
              collection,
          },
        ];
      }

      if (
        featured === "true"
      ) {
        filter.isFeatured = true;
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
        sort === "price"
      ) {
        query =
          query.sort({
            priceAmount: 1,
          });
      } else {
        query =
          query.sort({
            createdAt: -1,
          });
      }

      const products =
        await query.lean();

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
router.get(
  "/:slug/source",
  authOptional,
  async (req, res, next) => {
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

      const isAdmin =
        req.user?.role ===
        "admin";

      const isFree =
        product.productType ===
        "FREE";

      if (
        !isFree &&
        !isAdmin
      ) {
        if (!req.user?.id) {
          return res
            .status(401)
            .json({
              message:
                "Sign in and purchase this product to unlock its source.",
            });
        }

        const purchased =
          await Order.exists({
            user:
              req.user.id,

            status: "paid",

            "items.product":
              product._id,
          });

        if (!purchased) {
          return res
            .status(403)
            .json({
              message:
                "Purchase required to unlock source code.",
            });
        }
      }

      res.json({
        code: {
          html:
            product.code
              ?.html || "",

          css:
            product.code
              ?.css || "",

          javascript:
            product.code
              ?.javascript || "",
        },

        productId:
          product._id,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;