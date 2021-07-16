import express from 'express';
import {
  createComment,
  getComments,
} from '../controllers/commentsControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/:id').get(getComments).post(protect, createComment);

export default router;
