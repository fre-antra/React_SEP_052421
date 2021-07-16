import express from 'express';
import {
  createPost,
  getPostById,
  getPosts,
  updatePost,
} from '../controllers/postsControllers.js';

import { protect, author } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').get(getPosts).post(protect, createPost);
router.route('/:id').get(getPostById);
router.route('/:id/:user').put(protect, author, updatePost);

export default router;
