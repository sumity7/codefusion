import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true
    },

    name: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      trim: true,
      index: true
    },

    collection: {
      type: String,
      default: "New",
      trim: true,
      index: true
    },

    collections: {
      type: [String],
      default: []
    },

    description: {
      type: String,
      default: ""
    },

    shortDescription: {
      type: String,
      default: ""
    },

    badge: {
      type: String,
      default: "NEW"
    },

    productType: {
      type: String,
      enum: ["FREE", "PRO", "PREMIUM"],
      default: "FREE",
      index: true
    },

    price: {
      type: String,
      default: "Free"
    },

    priceAmount: {
      type: Number,
      default: 0,
      min: 0
    },

    currency: {
      type: String,
      default: "INR"
    },

    compareAtPrice: {
      type: String,
      default: ""
    },

    rating: {
      type: Number,
      default: 5
    },

    reviewCount: {
      type: Number,
      default: 0
    },

    // Real counters, maintained by the server (copy, wishlist, view events).
    // These used to be strings, which made "Most popular" sort alphabetically.
    usageCount: {
      type: Number,
      default: 0
    },

    downloadCount: {
      type: Number,
      default: 0
    },

    copyCount: {
      type: Number,
      default: 0
    },

    viewCount: {
      type: Number,
      default: 0
    },

    wishlistCount: {
      type: Number,
      default: 0
    },

    // Recomputed by jobs/scores.js from recorded events. Popular is all-time
    // engagement; trending is the last 7 days.
    popularityScore: {
      type: Number,
      default: 0,
      index: true
    },

    trendingScore: {
      type: Number,
      default: 0,
      index: true
    },

    // Use-case and style tags used for discovery ("SaaS", "animated",
    // "no dependencies"...). Derived by scripts/enrich.js, editable in admin.
    discoveryTags: {
      type: [String],
      default: [],
      index: true
    },

    // Optional static poster image for listing cards. When present, cards show
    // it until hovered instead of booting a live iframe.
    thumbnail: {
      type: String,
      default: ""
    },

    // Light-theme counterpart of `thumbnail`. Generated images live at
    // /products/:slug/thumbnail?theme=...; an admin may also paste any image URL.
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Creator",
      default: null,
      index: true
    },

    // One entry per shipped version, newest last. Powers /new and update emails.
    releases: {
      type: [
        {
          version: String,
          date: Date,
          notes: [String],
          kind: { type: String, enum: ["new", "update"], default: "update" }
        }
      ],
      default: []
    },

    thumbnailLight: {
      type: String,
      default: ""
    },

    tags: {
      type: [String],
      default: []
    },

    features: {
      type: [String],
      default: []
    },

    specifications: {
      type: [[String]],
      default: []
    },

    compatibility: {
      type: [String],
      default: []
    },

    license: {
      type: String,
      default: "Personal & commercial use"
    },

    version: {
      type: String,
      default: "1.0.0"
    },

    lastUpdated: {
      type: Date,
      default: Date.now
    },

    changelog: {
      type: [String],
      default: []
    },

    gallery: {
      type: [String],
      default: []
    },

    previewType: {
      type: String,
      default: "card"
    },

    // "page" products are complete pages, so their card preview is rendered at a
    // desktop width and scaled down. Components keep rendering at the card's own
    // width, where they are designed to sit.
    previewLayout: {
      type: String,
      enum: ["auto", "page"],
      default: "auto"
    },

    isFeatured: {
      type: Boolean,
      default: false
    },

    isVerified: {
      type: Boolean,
      default: false,
      index: true
    },

    isPublished: {
      type: Boolean,
      default: false,
      index: true
    },

    prompt: {
      type: String,
      default: ""
    },

    seoTitle: {
      type: String,
      default: ""
    },

    seoDescription: {
      type: String,
      default: ""
    },

    previewCode: {
      type: String,
      default: ""
    },

    code: {
      html: {
        type: String,
        default: ""
      },

      css: {
        type: String,
        default: ""
      },

      javascript: {
        type: String,
        default: ""
      }
    },

    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
    suppressReservedKeysWarning: true
  }
);

productSchema.index({
  name: "text",
  description: "text",
  shortDescription: "text",
  tags: "text",
  discoveryTags: "text"
});

export default mongoose.model(
  "Product",
  productSchema
);