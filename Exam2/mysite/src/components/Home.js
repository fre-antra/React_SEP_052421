import React from 'react'
import Main from './Main';
import About from "./About";
import Projects from './Projects';
import Summary from './Summary';
import Contact from './Contact';

function Home() {
    return (
        <div>
            <Main />
            <About></About>
            <Summary></Summary>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    )
}

export default Home;
