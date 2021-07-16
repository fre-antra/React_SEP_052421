import asyncHandler from 'express-async-handler';
import { Comments } from '../models/commentsModel.js';
import Post from '../models/postModel.js';

// @desc    Fetch all posts
// @route   GET /posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});

  res.json(posts);
});

// @desc    Fetch single post by id
// @route   GET /posts/:id
// @access  Public
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

// @desc    Create a new post
// @route   POST /posts
// @access  Private
const createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const comments = await Comments.create({ commentsArray: [] });

  const post = new Post({
    title,
    user: req.user._id,
    content,
    comments: comments._id,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
});

// @desc    Update a new post
// @route   PUT /posts/:id
// @access  Private / Author
const updatePost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const post = await Post.findById(req.params.id);

  if (post) {
    post.title = title;
    post.content = content;

    const updatedPost = await post.save();

    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error('Post Not Found!');
  }
});

export { getPosts, getPostById, createPost, updatePost };
