import React, { useState } from "react";
import "./App.css";
import ReusableBox from "./Components/ReusableBox/ReusableBox";
import Header from "./Components/Header/Header";

function App() {
  const boxColors = ["blue", "black", "red", "green"];
  const [titleColor, setTitleColor] = useState("");

  const colorChangeHandler = (color) => {
    setTitleColor(color);
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
              key={index}
              color={color}
              colorClick={() => colorChangeHandler(color)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
