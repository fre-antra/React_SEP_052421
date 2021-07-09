import React, { Component } from "react";
import logo from "../images/logo.svg";

export default class Navigation extends Component {
  render() {
    return (
      <div class="navigation">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
              <div class="logo">
                <a href="index.html">
                  <img src={logo} />
                </a>
                {/* <a href="index.html">L</a> */}
              </div>
            </div>

            <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
              <div class="primary-nav">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#projects">Portfolio</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
