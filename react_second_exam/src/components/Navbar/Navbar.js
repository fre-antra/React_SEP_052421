import React, { useEffect } from "react";
import logo from "../../images/logo.svg";
import { navigation } from "../../utils/jquery";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    navigation();
  }, []);

  return (
    // <!-- Navigation Bar -->
    <div className="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo">
              <a href="index.html">
                <img src={logo} alt="main-logo" />
              </a>
            </div>
          </div>

          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Portfolio</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
