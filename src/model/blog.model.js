"use strict";

const mongoose = require("mongoose");

const blogCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
  },
  {
    collection: "blogCategories",
  }
);

const BlogCategory = mongoose.model("BlogCategory", blogCategorySchema);

const BlogPostSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogCategory",
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      trim: true,
      required: true,
    },

    content: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogPosts",
    timestamps: true,
  }
);

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = { BlogCategory, BlogPost };
