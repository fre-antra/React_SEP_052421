import React, { Component } from "react";

export default class Intro extends Component {
  render() {
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

          <div class="row text-center">
            <div class="banner-buttons">
              <div class="col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
                <a class="btn btn-default btn-border" href="#about">
                  Info
                </a>
              </div>

              <div class="col-sm-1 col-md-1">
                <a class="btn btn-default btn-border" href="#projects">
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
