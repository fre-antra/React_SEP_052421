import "./creatStyle.css";
import { Redirect, Link } from "react-router-dom";

const CreatArticle = () => {
  return (
    <form className="creatContainer">
      <header>Create Article</header>

      <div className="creat__title">
        <h3>Title</h3>
        <textarea
          className="title__input"
          placeholder="Title ..."
          rows="2"
          cols="50"
        />
      </div>
      <div className="creat__descript">
        <h3>Description</h3>
        <textarea
          className="descript__input"
          placeholder="Description ..."
          rows="10"
          cols="50"
        />
      </div>
      <div className="creat__article">
        <h3>Markdown</h3>
        <textarea
          className="article__input"
          placeholder="Main body ..."
          rows="10"
          cols="50"
        />
      </div>

      <div className="creat__btns">
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
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default CreatArticle;
