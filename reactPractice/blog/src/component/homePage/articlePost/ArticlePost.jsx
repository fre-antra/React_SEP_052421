import { Link } from "react-router-dom";
import './postStyle.css'

const ArticlePost = ({ artical }) => {
  console.log(artical);
  return (
    <>
      <article className="article__post">
        <header className="post--title">{ artical.title }</header>
        <p className="post--time">{ artical.createAt.toLocaleDateString()}</p>
        <p className="post--context">{ artical.description}</p>
        <div className="post__btns">
          <Link to="/blog/view">View More</Link>
          <Link to="/blog/edit">Edit</Link>
          <button className="btn--delete" onClick={()=>{console.log('click')}}> Delete</button>
        </div>
      </article>
    </>
  );
};

export default ArticlePost;
