import ArticlePost from "./articlePost/ArticlePost";
import { Link } from "react-router-dom";
import "./HPstyle.css";

const HomePage = ({ articals }) => {

    console.log(articals);
  return (
    <section className="homepage">
      <header>Blog Articles</header>
      <Link to="/blog/create">New Article</Link>
      <div className="articles">
        {articals.map((artical, index) => (
            <ArticlePost key={index} artical={artical} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
