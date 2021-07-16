import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const commentsSchema = mongoose.Schema(
  {
    commentsArray: [commentSchema],
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.model('Comments', commentsSchema);
const Comment = mongoose.model('Comment', commentSchema);

export { Comments, Comment };
