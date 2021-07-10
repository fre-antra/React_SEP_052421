import React from "react";
import { Link } from "react-router-dom";
import "./navbarStyle.css";

const Navbar = () => {
  return (
    <>
      <section className="navigation" id="navigation">
        
          <div className="logo">
            <Link to="/">
              <img src="./images/logo.svg" alt="logo" />
            </Link>
          </div>

          <div className="primary-nav">
              <p>
                <Link to="/"> Home </Link>
              </p>
              <p>
                <Link to="/portfolio"> Portfolio </Link>
              </p>
              <p>
                <Link to="/contact"> Contact </Link>
              </p>
          </div>
      </section>
    </>
  );
};

export default Navbar;
