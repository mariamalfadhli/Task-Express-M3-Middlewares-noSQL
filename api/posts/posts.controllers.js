const Post = require("../../models/Post");

exports.postsCreate = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    return next(err);
  }
};

exports.postsDelete = async (req, res) => {
  try {
    await req.post.deleteOne();
    res.status(204).end();
  } catch (err) {
    return next(err);
  }
};

exports.postsUpdate = async (req, res) => {
  try {
    await req.post.updateOne(req.body);
    res.status(204).end();
  } catch (err) {
    return next(err);
  }
};

exports.postsGet = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    return next(err);
  }
};
