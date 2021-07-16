import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import commentsRoutes from './routes/commentsRoutes.js';
import postsRoutes from './routes/postsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';

dotenv.config();

connectDB();

const app = express();

// allow json type req-body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('api is running...');
});

app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);
app.use('/users', usersRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${port}`.green.inverse
      .bold
  )
);
