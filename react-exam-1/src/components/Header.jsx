import React from "react";

export const Header = ({ color }) => {
    return (
        <div>
            <h1 className="app-title" style={{ color: `${color}` }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h1>
        </div>
    );
};
