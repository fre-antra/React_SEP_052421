import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// Find the user by id to make sure the user account is still active
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const { id } = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(id).select('-password');

      next();
    } catch (err) {
      res.status(401);
      throw new Error('Not authorized!');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized');
  }
});

// check if the user is the author
const author = asyncHandler(async (req, res, next) => {
  const isAuthor = req.user._id.equals(req.params.user);

  if (isAuthor) {
    next();
  } else {
    res.status(401);
    throw new Error('You are not author!');
  }
});

const admin = asyncHandler(async (req, res, next) => {
  const isAdmin = req.user.isAdmin;

  if (isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('You are not admin!');
  }
});

export { protect, author, admin };
