import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import $ from "jquery";

const resizeProjects = () => {
  $(".luvtalk-project").css("height", $(".luvtalk-project").width() * 1.3);
  $(".luvtalk-project p").css("height", "50%");
  $(".luvtalk-project h3").css("height", "20%");
  $(".luvtalk-project h3").css(
    "padding-top",
    ($(".luvtalk-project").height() -
      $(".luvtalk-project h3").height() -
      $(".luvtalk-project p").height() -
      $(".luvtalk-project .row").outerHeight()) /
      2
  );
  $(".personal-website-project").css(
    "height",
    $(".personal-website-project").width() * 1.3
  );
  $(".personal-website-project p").css("height", "50%");
  $(".personal-website-project h3").css("height", "20%");
  $(".personal-website-project h3").css(
    "padding-top",
    ($(".personal-website-project").height() -
      $(".personal-website-project h3").height() -
      $(".personal-website-project p").height() -
      $(".personal-website-project .row").outerHeight()) /
      2
  );
  $(".strike-zone-project").css(
    "height",
    $(".strike-zone-project").width() * 1.3
  );
  $(".strike-zone-project p").css("height", "50%");
  $(".strike-zone-project h3").css("height", "20%");
  $(".strike-zone-project h3").css(
    "padding-top",
    ($(".strike-zone-project").height() -
      $(".strike-zone-project h3").height() -
      $(".strike-zone-project p").height() -
      $(".strike-zone-project .row").outerHeight()) /
      2
  );
};

let timer;
const ResizeHandler = () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    timer = null;
    resizeProjects();
  }, 500);
};

export default function Projects() {
  React.useEffect(() => {
    resizeProjects();
    window.addEventListener("resize", ResizeHandler);
    return () => {
      window.removeEventListener("resize", ResizeHandler);
    };
  }, []);

  return (
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
          <ProjectCard
            title="Personal Website"
            content="Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests."
            clsnm="luvtalk-project"
          ></ProjectCard>

          <ProjectCard
            title="Personal Website"
            content="Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests."
            clsnm="personal-website-project"
          ></ProjectCard>

          <ProjectCard
            title="Strike Zone Analysis"
            content="Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game."
            clsnm="strike-zone-project"
          ></ProjectCard>
        </div>
      </div>
    </div>
  );
}
