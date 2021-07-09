import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import './bootstrap/css/bootstrap.min.css';

import Home from './Home';
import Navigation from './components/Navigation/Navigation';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/portfolio" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);