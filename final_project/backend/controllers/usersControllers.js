import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc    Auth user & get token
// @route   POST /users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id), // response a token for the user
    });
  } else {
    res.status(401); // CODE 401 -- Unauthorized
    throw new Error('Invalid email or password');
  }
});

// @desc    Get user profile
// @route   GET /users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(404);
    throw new Error('User Not Found!');
  }
});

// @desc    Register a new user
// @route   POST /users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists!');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      //CODE 201-Create Success
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id), // response a token for the user
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data!');
  }
});

// @desc    Fetch all users
// @route   GET /users/all
// @access  Private Admin
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password');

  res.json(users);
});

// @desc    Delete a user by Id
// @route   DELETE /users/:id
// @access  Private Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json('User removed!');
  } else {
    res.status(404);
    throw new Error('User Not Found!');
  }
});

// @desc    Update a user by Id
// @route   PUT /users/:id
// @access  Private Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    const { isAdmin, password } = req.body;
    user.isAdmin = isAdmin;
    user.password = password;

    await user.save();
    res.status(201).json('User Updated!');
  } else {
    res.status(404);
    throw new Error('User Not Found!');
  }
});

export {
  authUser,
  getUserProfile,
  registerUser,
  getAllUsers,
  deleteUser,
  updateUser,
};
