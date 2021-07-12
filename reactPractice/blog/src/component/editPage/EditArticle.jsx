import "./editStyle.css";
import { Redirect, Link } from "react-router-dom";

const EditArticle = () => {
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
        />
      </div>
      <div className="edit__descript">
        <h3>Description</h3>
        <textarea
          className="descript__input"
          placeholder="Description ..."
          rows="10"
          cols="50"
        />
      </div>
      <div className="edit__article">
        <h3>Markdown</h3>
        <textarea
          className="article__input"
          placeholder="Main body ..."
          rows="10"
          cols="50"
        />
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
