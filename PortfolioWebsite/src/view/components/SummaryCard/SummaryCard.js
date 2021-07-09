import React from "react";
import "./SummaryCard.css";

export default function SummaryCard({ title, content, icon }) {
  return (
    <div className="summary__card">
      <div className="col-sm-1 col-md-1">
        <div className="development-img">
          <img alt="img" className="img-responsive" src={icon} />
        </div>
      </div>

      <div className="col-sm-4 col-md-4">
        <div className="development-description">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
