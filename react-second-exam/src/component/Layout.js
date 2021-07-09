import Navbar from "./Navbar/Navbar";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Skill from "./Skill/Skill";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const Layout = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar></Navbar>
          <Intro></Intro>
          <About></About>
          <Skill></Skill>
          <Project></Project>
          <Contact></Contact>
          <Footer></Footer>
        </Route>
        <Route exact path="/portfolio">
          <Navbar></Navbar>
          <Project></Project>
          <Footer></Footer>
        </Route>
        <Route exact path="/contact">
          <Navbar></Navbar>
          <Contact></Contact>
          <Footer></Footer>
        </Route>
      </Switch>
    </Router>
  );
};

export default Layout;
