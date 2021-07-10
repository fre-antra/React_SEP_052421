import React from 'react';
import './Main.css';
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';
const Main = () => {
    return (
        <div>
            <div className="main-introduction">
                <h5>Hello, I'm</h5>
                <h1>Chunfu Zhang</h1>
                <h3>UI Developer. UX Designer. Problem Solver.</h3>
                <div className="button-container">
                    <button className="main-introduction-buttons">Info</button>
                    <button className="main-introduction-buttons">Portfolio</button>
                </div>
            </div>
            <About />
            <Service />
            <Portfolio />
            <Contact />
        </div>
    )

}

export default Main;