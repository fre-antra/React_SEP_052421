import React, { useState } from "react";
import "./App.css";
import ReusableBox from "./Components/ReusableBox/ReusableBox";
import Header from "./Components/Header/Header";

import { BoxData } from "./api/Data";

function App() {
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
        {BoxData.map((box) => {
          return (
            <ReusableBox
              key={box.color}
              color={box.color}
              colorClick={() => colorChangeHandler(box.color)}
              bStyle={boxStyle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
