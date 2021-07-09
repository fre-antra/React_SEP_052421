import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioScreen.css";

const PortfolioScreen = () => {
  return (
    <>
      <div className="projects" id="projects">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="projects-header">
                <h1>Projects and Portfolio</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="projects-header-quote">
                <h3>Sharing my endeavors and passions...</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4 text-center">
              <div className="luvtalk-project card">
                <h3>LUV TALK Website</h3>
                <p>
                  Website, created during my first internship, which utilized
                  HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.{" "}
                </p>
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                    <div className="project-more-info">
                      <Link
                        to="/"
                        className="btn btn-default btn-border"
                        onClick={(e) => e.preventDefault()}
                      >
                        More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 text-center">
              <div className="personal-website-project card">
                <h3>Personal Website</h3>
                <p>
                  Enjoyable side project that was created to experiment with
                  more HTML and CSS, but also provided an outlet to showcase my
                  abilities and interests.
                </p>
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                    <div className="project-more-info">
                      <Link
                        to="/"
                        className="btn btn-default btn-border"
                        onClick={(e) => e.preventDefault()}
                      >
                        More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 text-center">
              <div className="strike-zone-project card">
                <h3>Strike Zone Analysis</h3>
                <p>
                  Data analytics project completed during my time at the
                  Illinois Math and Science Academy which studied the baseball
                  strike zone based on the state of the game.
                </p>
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                    <div className="project-more-info">
                      <Link
                        to="/"
                        className="btn btn-default btn-border"
                        onClick={(e) => e.preventDefault()}
                      >
                        More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
              <div className="see-more-button">
                <Link
                  to="/"
                  className="btn btn-default btn-border"
                  onClick={(e) => e.preventDefault()}
                >
                  More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioScreen;
