import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from '../controllers/usersControllers.js';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/all').get(protect, admin, getAllUsers);
router
  .route('/:id')
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);

export default router;
