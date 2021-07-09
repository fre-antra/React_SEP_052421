import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

const menusList = [
  {
    name: "首页",
    path: "/index",
  },
  {
    name: "列表",
    path: "/list",
  },
  {
    name: "详情",
    path: "/detail",
  },
];

const Index = () => {
  return (
    <>
      <h1>I am index</h1>
      <Link to="/index"> back to index</Link>
    </>
  );
};
const List = () => {
  return (
    <>
      <h1>I am list</h1>
      <Link to="/index"> back to index</Link>
    </>
  );
};
const Detail = () => {
  return (
    <>
      <h1>I am detail</h1>
      <Link to="/index"> back to index</Link>
    </>
  );
};

function App() {
  return (
    <>
      <div>
        <Router>
          <div>
            {
              /* link 路由跳转 */
              menusList.map((router) => (
                <Link key={router.path} to={router.path}>
                  <span className="routerLink">{router.name}</span>
                </Link>
              ))
            }
          </div>
          <Switch>
            <Route path={"/index"} component={Index}></Route>
            <Route path={"/list"} component={List}></Route>
            <Route path={"/detail"} component={Detail}></Route>
            {/*  路由不匹配，重定向到/index  */}
            <Redirect from="/*" to="/index" />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
