const express = require("express");
const postsRouter = express.Router();

const postsController = require("../controllers/posts_controller");

postsRouter
  .get("/", postsController.getAllPosts)
  .post("/", postsController.createPost)
  .get("/:postId", postsController.getPostById);

module.exports = postsRouter;
