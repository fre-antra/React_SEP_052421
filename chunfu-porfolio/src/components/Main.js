import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div className="main-introduction">
            <h5>Hello, I'm</h5>
            <h1>Chunfu Zhang</h1>
            <h3>UI Developer. UX Designer. Problem Solver.</h3>
            <div className="button-container">
                <button className="main-introduction-buttons">Info</button>
                <button className="main-introduction-buttons">Portfolio</button>
            </div>
        </div>
    )

}

export default Main;