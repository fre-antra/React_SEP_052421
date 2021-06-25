import React, { useState } from "react";
import "./App.css";
import ReusableBox from "./Components/ReusableBox/ReusableBox";
import Header from "./Components/Header/Header";

function App() {
  const [titleColor, setTitleColor] = useState("");

  const colorChangeHandler = (color) => {
    setTitleColor(color);
  };
  return (
    <div className="App">
      <Header color={titleColor} />
      <div className="row">
        <ReusableBox
          color="blue"
          colorClick={() => colorChangeHandler("blue")}
        />
        <ReusableBox
          color="black"
          colorClick={() => colorChangeHandler("black")}
        />
      </div>
      <div className="row">
        <ReusableBox color="red" colorClick={() => colorChangeHandler("red")} />
        <ReusableBox
          color="green"
          colorClick={() => colorChangeHandler("green")}
        />
      </div>
    </div>
  );
}

export default App;
