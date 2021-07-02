import Header from "../header/Header";
import Search from "../search/Search";
import Tabs from "../tabs/Tabs";
import PhotoData from "../../data/PhotoData";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

const Layout = () => {

  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Search />
          <Tabs />
          <PhotoData />
          <Switch>
            <Route
              path="/"
              render={() => {
                return <Redirect to="/mountain" />;
              }}
            />
            {/* <Route exact path="/moutain" render={() => <Tabs />} />
            <Route exact path="/beaches" render={() => <Tabs />} />
            <Route exact path="/birds" render={() => <Tabs />} />
            <Route exact path="/food" render={() => <Tabs />} /> */}
            {/* <Route
              path="/search/:searchTarget"
              render={(props) => (
                <PhotoData searchTarget={props.match.params.searchTarget} />
              )}
            /> */}
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default Layout;
