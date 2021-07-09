import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import PortfolioScreen from "./Screens/PortfolioScreen/PortfolioScreen";
import ContactScreen from "./Screens/ContactScreen/ContactScreen";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/portfolio" exact component={PortfolioScreen} />
        <Route path="/contact" exact component={ContactScreen} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
