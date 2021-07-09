import React from "react";
import { Link } from "react-router-dom";
import LogoSVG from "../../images/logo.svg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
              <div className="logo">
                <Link to="/">
                  <img src={LogoSVG} alt="Logo" />
                </Link>
              </div>
            </div>

            <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
              <div className="primary-nav">
                <ul>
                  <li>
                    <Link to="/" className="navigation__link">
                      Home
                    </Link>
                    {/* <a href="index.html">Home</a> */}
                  </li>
                  <li>
                    <Link to="/portfolio" className="navigation__link">
                      Portfolio
                    </Link>
                    {/* <a href="portfolio.html">Portfolio</a> */}
                  </li>
                  <li>
                    <Link to="/contact" className="navigation__link">
                      Contact
                    </Link>
                    {/* <a href="contact.html">Contact</a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
