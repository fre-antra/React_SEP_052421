import React from "react";
import "./Header.css";

const Header = ({ color }) => {
  return (
    <div>
      <h1 className="app-title" style={{ color: `${color}` }}>
        Some Random Title That Changes Color
      </h1>
    </div>
  );
};

export default Header;
