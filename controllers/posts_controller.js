const postModel = require("../models/post_model");

const getAllPosts = async (req, res) => {
  try {
    const filter = req.query.sender;
    if (filter) {
      const posts = await postModel.find({ owner: filter });
      res.status(200).send(posts);
      return;
    } else {
      const posts = await postModel.find({});
      res.status(200).send(posts);
      return;
    }
  } catch (error) {
    res.status(400).send(error.message);
    return;
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, owner } = req.body;
    const post = await postModel.create({ title, content, owner });
    res.status(201).send(post);
    return;
  } catch (error) {
    res.status(400).send(error.message);
    return;
  }
};

const getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await postModel.findById(postId);
    if(!post){
      res.status(404).send("Post not found");
      return
    }
    res.status(200).send(post);
    return;
  } catch (error) {
    res.status(400).send(error.message);
    return;
  }
};

const getPostBySender = async (req, res) => {
  try {
    const sender = req.params.sender;
    const post = await postModel.find({ owner: sender });
    res.status(200).send(post);
    return;
  } catch (error) {
    res.status(400).send(error.message);
    return;
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { title,content } = req.body;
    const post = await postModel.findOne({ _id: postId });
    post.content = content;
    post.title = title;
    await post.save();
    res.status(200).send(post);
    return;
  } catch (error) {
    res.status(400).send(error.message);
    return;
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await postModel.findById(postId);
    if (!post) {
      res.status(404).send("Post not found");
      return;
    }
    await postModel.deleteOne({ _id: postId });
    res.status(200).send("Post deleted");
    return;
  } catch (error) {
    res.status(400).send(error.message);
    return;
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  getPostBySender,
  updatePost,
  deletePost,
};
