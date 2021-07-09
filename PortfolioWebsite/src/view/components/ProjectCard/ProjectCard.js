import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ title, content, clsnm }) {
  return (
    <div className="col-sm-4 col-md-4 text-center">
      <div className={clsnm}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="project-more-info">
          <a className="btn btn-default btn-border" href="/#">
            More
          </a>
        </div>
      </div>
    </div>
  );
}
