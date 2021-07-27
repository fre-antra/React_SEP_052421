import "./editStyle.css";
import { useContext } from 'react';
import { BlogContext } from '../blogContext/BlogContext';
import { Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const EditArticle = () => {

  const { curBlogId, setCurBlogId } = useContext(BlogContext)
  const blogs = useSelector((state) => state.blogReducer.blog);
  console.log(blogs);
  const blog = blogs.find(blog => blog._id === curBlogId)

  console.log(blog, blog._id);
 
  return (
    <form className="editContainer">
      <header>Edit Article</header>

      <div className="edit__title">
        <h3>Title</h3>
        <textarea
          className="title__input"
          placeholder="Title ..."
          rows="2"
          cols="50"
        >
          {blog.title}
        </textarea>
      </div>
      <div className="edit__descript">
        <h3>Description</h3>
        <textarea
          className="descript__input"
          placeholder="Description ..."
          rows="10"
          cols="50"
        >
          {blog.description}
        </textarea>
      </div>
      <div className="edit__article">
        <h3>Markdown</h3>
        <textarea
          className="article__input"
          placeholder="Main body ..."
          rows="10"
          cols="50"
        >
          {blog.markdown}
        </textarea>
      </div>

      <div className="edit__btns">
        <button className="btn__submit" type="submit">
          Save
        </button>
        <Link
          className="btn__cancel"
          to="/blog"
          onClick={() => {
            console.log("you got me");
          }}
        >
          {" "}
          Cancel{" "}
        </Link>
      </div>
    </form>
  );
};

export default EditArticle;
