import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import posts from './data/posts.js';
import comments from './data/comments.js';
import User from './models/userModel.js';
import Post from './models/postModel.js';
import { Comments } from './models/commentsModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Post.deleteMany();
    await Comments.deleteMany();
    await User.deleteMany();

    console.log('Prev data cleard!'.yellow.inverse);

    const createdUsers = await User.insertMany(users);
    const adminId = createdUsers[0]._id;

    const sampleComments = await Comments.insertMany(comments);
    let idx = 0;

    const samplePosts = posts.map((p) => {
      return { ...p, user: adminId, comments: sampleComments[idx++]._id };
    });

    await Post.insertMany(samplePosts);

    console.log('Init Data imported.'.green.inverse);
    process.exit();
  } catch (err) {
    console.log(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Post.deleteMany();
    await Comments.deleteMany();
    await User.deleteMany();

    console.log('Init Data destroyed.'.red.inverse);
    process.exit();
  } catch (err) {
    console.log(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
