const getAllPosts = async (req, res) => {
  try {
    res.status(200).send("All posts");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createPost = async (req, res) => {
  try {
    const post = req.body;
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
    res.status(200).send("Post ID: " + postId);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
};
