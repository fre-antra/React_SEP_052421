import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import $ from 'jquery';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Projects />
            <Contact />
            <Footer />
          </Route>
          <Route exact path="/portfolio">
            <Header />
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Header />
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
