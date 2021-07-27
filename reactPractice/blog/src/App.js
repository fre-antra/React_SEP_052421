import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./component/homePage/HomePage";
import ViewArticle from "./component/viewPage/ViewArticle";
import CreatArticle from "./component/createPage/CreatArticle";
import EditArticle from "./component/editPage/EditArticle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { BlogContext } from "./component/blogContext/BlogContext";

function App() {
  const articals = [
    {
      _id: 1234,
      title: "Hello world 1",
      description: "coding coding 1",
      markdown: "## good 1",
      createAt: new Date(),
    },
    {
      _id: 4321,
      title: "Hello world 2",
      description: "coding coding 2",
      markdown: "## good 2",
      createAt: new Date(),
    },
  ];

  const [curBlogId, setCurBlogId] = useState(1234);
  const dispatch = useDispatch();

  const providerValue = useMemo(
    () => ({ curBlogId, setCurBlogId }, [curBlogId, setCurBlogId])
  );

  console.log(typeof setCurBlogId, providerValue);

  dispatch({ type: "POST_Artical", payload: articals });
  // console.log(actionCreator.postArtical());
  // dispatch()
  const curState = useSelector((state) => state.blogReducer.blog);
  console.log(curState);
  useEffect(() => {
    console.log("App Changed");
  }, [curState, setCurBlogId]);

  return (
    <Router>
      <Switch>
        <BlogContext.Provider value={{ curBlogId, setCurBlogId }}>
          <Route exact path="/blog">
            <HomePage articles={curState} />
          </Route>
          <Route path="/blog/view">
            <ViewArticle />
          </Route>
          <Route path="/blog/create">
            <CreatArticle />
          </Route>
          <Route path="/blog/edit">
            <EditArticle />
          </Route>
        </BlogContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
