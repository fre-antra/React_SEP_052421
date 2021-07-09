import React from 'react';
import './Home.css';

import Main from './components/Main/Main';
import About from './components/About/About';
import Summary from './components/Summary/Summary';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


export default class Home extends React.Component {
    render() {
        return (
            <>
            <Main /><About /><Summary /><Projects /><Contact />
            </>
        );
    }
}