import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { navigation } from '../../js/index';
import './NavigationBar.css';

const NavigationBar = () => {
  useEffect(() => {
    navigation();
  }, []);

  return (
    <div className="navigation" id="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo">
              <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
          </div>

          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
