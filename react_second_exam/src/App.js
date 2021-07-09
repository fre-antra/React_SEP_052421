import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./boostrap/css/bootstrap.min.css";
import { Contact, Footer, Home, Navbar, Portfolio } from "./components";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
