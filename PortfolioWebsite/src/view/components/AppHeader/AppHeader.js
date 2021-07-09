import React from "react";
import "./AppHeader.css";
import { NavLink, Link } from "react-router-dom";

import Logo from "../../public/images/logo.svg";
import $ from "jquery";

export default function AppHeader() {
  console.log(11);

  let headerRef = React.useRef();

  const onloadHelper = () => {
    resizeNav();
    headerRef.current.style.visibility = "visible";
  };

  const resizeNav = () => {
    $(".primary-nav").css("height", $(".logo").height());
    $(".primary-nav li").css(
      "margin-top",
      ($(".primary-nav").height() - $(".primary-nav li").height()) / 2 + "px"
    );
  };

  let timer;
  const ResizeHandler = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      resizeNav();
    }, 500);
  };

  React.useEffect(() => {
    // react useEffect run before img is fully loaded!!!!!!
    // It is painful!!!
    // you cannot do resizeNav() because img now is just a alt text!!!

    window.addEventListener("resize", ResizeHandler);
    return () => {
      window.removeEventListener("resize", ResizeHandler);
    };
  }, []);

  return (
    <div className="navigation" ref={headerRef}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo">
              <Link to="/">
                <img alt="img" src={Logo} onLoad={() => onloadHelper()} />
              </Link>
            </div>
          </div>

          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav">
              <ul>
                <li>
                  <NavLink
                    exact={true}
                    className="nav__link"
                    activeClassName="active"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                &nbsp;
                <li>
                  <NavLink
                    exact={true}
                    className="nav__link"
                    activeClassName="active"
                    to="/portfolio"
                  >
                    Portfolio
                  </NavLink>
                </li>
                &nbsp;
                <li>
                  <NavLink
                    exact={true}
                    className="nav__link"
                    activeClassName="active"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
