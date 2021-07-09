import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';




function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>


          {/* portfolio */}
          <Route path='/portfolio'>
            <Portfolio />
          </Route>

          {/* contact */}
          <Route path='/contact'>
            <Contact />
          </Route>



          {/* default */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
