import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="entry-banner text-center">
            <h1 id="hello">Hello, I'm</h1>
            <h1 id="name">XXXX</h1>
            <h1 id="person-description">
              UI Developer. UX Desinger. Problem Solver.
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="banner-buttons banner-buttons-container">
            <div className="col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5 banner-btn">
              <Link className="btn btn-default btn-border " to="#about">
                Info
              </Link>
            </div>

            <div className="col-sm-1 col-md-1 banner-btn">
              <Link className="btn btn-default btn-border" to="#projects">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
