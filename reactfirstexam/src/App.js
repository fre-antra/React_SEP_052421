import React, { useState } from "react";
import "./App.css";
import ReusableBox from "./Components/ReusableBox/ReusableBox";
import Header from "./Components/Header/Header";

function App() {
  const boxColors = ["blue", "black", "red", "green"];
  const [titleColor, setTitleColor] = useState("");
  const [boxStyle, setBoxStyle] = useState({ boxShadow: `0px 0px 0px black` });

  const colorChangeHandler = (color) => {
    setTitleColor(color);
    setBoxStyle({ boxShadow: `2px 2px 5px ${color}` });
  };
  return (
    <div className="App">
      <div className="app-header">
        <Header color={titleColor} />
      </div>
      <div className="app-content">
        {boxColors.map((color, index) => {
          return (
            <ReusableBox
              key={color}
              color={color}
              colorClick={() => colorChangeHandler(color)}
              bStyle={boxStyle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
