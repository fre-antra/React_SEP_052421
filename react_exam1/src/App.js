import React, { useState } from "react";
import "./App.css";
import ModularBox from "./components/ModularBox/ModularBox";
import Header from "./components/Header/Header";

function App() {
  const boxColors = ["blue", "black", "red", "green"];
  const titles = ["Etiam In Placerat Lacus", " Hendrerit Posuere Elit", "Ex Id Iaculis Lacinia", "  Nunc Malesuada Ullamcorper"];
  const content = "Morbi porttitor ex id iaculis lacinia. Nullam sit amet turpis id risus aliquet consectetur. In egestas nec ex nec finibus. Aliquam vitae purus libero. Praesent vestibulum tortor eget pharetra facilisis. Mauris augue lorem, sollicitudin in justo eget, efficitur interdum lorem. Donec lectus tortor, pellentesque sit amet hendrerit quis, maximus ac nunc. Aenean vel imperdiet diam.";
  
  const [titleColor, setTitleColor] = useState("");
  const [selectArray, setSelectArr] = useState([false, false, false, false]);
  
  

  const colorChangeHandler = (color, index) => {
    setTitleColor(color);

    let arr = [false, false, false, false];
    arr[index] = true;
    setSelectArr(arr);
  };
  return (
    <div className="App">
      <div className="app-header">
        <Header color={titleColor} />
      </div>
      <div className="app-content">
        {boxColors.map((color, index) => {
          return (
            <ModularBox
              key={index}
              color={color}
              title={titles[index]}
              content={content}
              colorClick={() => colorChangeHandler(color, index)}
              selected={selectArray[index]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
