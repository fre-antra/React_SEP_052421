import asyncHandler from 'express-async-handler';
import { Comments, Comment } from '../models/commentsModel.js';

// @desc    Fetch comments array by ID
// @route   GET /comments/:id
// @access  Public
const getComments = asyncHandler(async (req, res) => {
  const comments = await Comments.findById(req.params.id);

  if (comments) {
    res.json(comments.commentsArray);
  } else {
    res.status(404);
    throw new Error('Comments not found');
  }
});

// @desc    Create a comment
// @route   POST /comments/:id
// @access  Public
const createComment = asyncHandler(async (req, res) => {
  const comments = await Comments.findById(req.params.id);

  if (comments) {
    const content = req.body.content;

    const createdComment = new Comment({
      user: req.user._id,
      content,
    });

    comments.commentsArray.push(createdComment);

    const { commentsArray } = await comments.save();

    res.status(201).json(commentsArray);
  } else {
    res.status(404);
    throw new Error('Comments not found');
  }
});

export { getComments, createComment };
