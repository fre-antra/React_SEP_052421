import React from "react";
import "./introStyle.css";

const Intro = () => {
  return (
    <>
      <section className="main" id="intro">
        <div className="intro__content entry-banner text-center">
          <h1 id="hello">Hello, I'm</h1>
          <h1 id="name">Baihan Chen</h1>
          <h1 id="person-description">
            UI Developer. UX Desinger. Problem Solver.
          </h1>
          <div className="banner-buttons">
           
              <a className="btn btn-default btn-border" href="#about">
                Info
              </a>
              <a className="btn btn-default btn-border" href="#projects">
                Portfolio
              </a>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
