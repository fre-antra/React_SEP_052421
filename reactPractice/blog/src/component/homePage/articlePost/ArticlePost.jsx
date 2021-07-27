import { Link } from "react-router-dom";
import "./postStyle.css";
import { useContext,  useState } from "react";
import { BlogContext } from "../../blogContext/BlogContext";

const ArticlePost = ({ article }) => {
  console.log(article);
  const { curBlogId, setCurBlogId } = useContext(BlogContext);
  
  console.log(curBlogId, setCurBlogId);
  const [tmp, setTmp]=useState(0)

  const handelClick = (e) => {
    console.log('click', typeof setCurBlogId)
    console.log('arti ID: ',article._id)
    setTmp(tmp + 1);
    // setCurBlogId(tmp + 1);
    console.log('tmp: ', tmp)
  }

  return (
    <>
      <article className="article__post">
        <header className="post--title">{article.title}</header>
        <p className="post--time">{article.createAt.toLocaleDateString()}</p>
        <p className="post--context">{article.description}</p>
        <div className="post__btns">
          <Link to="/blog/view" onClick={handelClick}>
            View More
          </Link>
          <Link to="/blog/edit" onClick={()=>handelClick()}>
            Edit
          </Link>
          <button className="btn--delete" onClick={handelClick}>
            Delete
          </button>
        </div>
      </article>
    </>
  );
};

export default ArticlePost;
