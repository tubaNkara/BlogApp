"use strict";

const router = require("express").Router(); //* Creates an instance of the Express router
const { blogCategory, blogPost } = require("../controllers/blog.controller"); //* Imports the blogCategory and blogPost controller objects, which contain the logic for handling requests

/*//! -------------------------- Blog Category Routes -------------------------- */

router
  .route("/category") //* Route for operations on all blog categories
  .get(blogCategory.list) //* GET request: List all categories
  .post(blogCategory.create); //* POST request: Create a new category

router
  .route("/category/:id") //* Route for operations on a specific category by ID
  .get(blogCategory.read) //* GET: Retrieve a single category
  .put(blogCategory.update) //* PUT: Fully update a category
  .patch(blogCategory.update) //* PATCH: Partially update a category
  .delete(blogCategory.delete); //* DELETE: Remove a category

/*//! ---------------------------- Blog Post Routes ---------------------------- */

router
  .route("/post") //* Route for operations on all blog posts
  .get(blogPost.list) //* GET: List all blog posts
  .post(blogPost.create); //* POST: Create a new blog post

router
  .route("/post/:id") //* Route for operations on a specific blog post by ID
  .get(blogPost.read) //* GET: Retrieve a single blog post
  .put(blogPost.update) //* PUT: Fully update a blog post
  .patch(blogPost.update) //* PATCH: Partially update a blog post
  .delete(blogPost.delete); //* DELETE: Remove a blog post

/*//! --------------------------------- Export --------------------------------- */

module.exports = router; //* Exports the router so it can be used in the main app file
