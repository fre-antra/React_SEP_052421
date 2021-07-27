import ArticlePost from "./articlePost/ArticlePost";
import { Link } from "react-router-dom";
import "./HPstyle.css";

const HomePage = ({ articles }) => {

    // console.log(articles);
  return (
    <section className="homepage">
      <header>Blog Articles</header>
      <Link to="/blog/create">New Article</Link>
      <div className="articles">
        {articles.map((article, index) => (
          <ArticlePost key={index} article={article}/>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
