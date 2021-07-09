import React from "react";
import { Link } from "react-router-dom";

const Main = props => {
  const { targetRef } = props;

  const handleScroll = id => {
    if (typeof id == "object") {
      id.scrollIntoView({ behavior: "smooth", block: "center" }); 
    } else {
      const anchorAbout = document.querySelector(id);
      anchorAbout.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
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

          <div className="row text-center">
            <div className="banner-buttons">
              <div className="col-sm-2 col-md-2 col-sm-offset-4 col-md-offset-4">
                <Link
                  to="#"
                  className="btn btn-default btn-border"
                  onClick={() => handleScroll("#about")}
                >
                  Info
                </Link>
              </div>

              <div className="col-sm-2 col-md-2">
                <Link
                  to="#"
                  className="btn btn-default btn-border"
                  onClick={() => handleScroll(targetRef)}
                >
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
