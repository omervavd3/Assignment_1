const getAllPosts = async (req, res) => {
  try {
    const filter = req.query.sender;
    if (filter) {
      res.status(200).send("Posts by owner: " + filter);
      return;
    } else {
      res.status(200).send("All posts");
    }
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

const getPostBySender = async (req, res) => {
  try {
    const sender = req.params.sender;
    res.status(200).send("Sender: " + sender);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const {updatedPost} = req.body;
    res.status(200).send("Post ID: " + postId + " updated ");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  getPostBySender,
  updatePost,
};
