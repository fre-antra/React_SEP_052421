import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const App = () => {
  const [titleColor, setTitleColor] = useState("");
  const colors = ["blue", "black", "red", "green"];
  const [boxFrame, setBoxFrame] = useState({ boxShadow: `0px 0px 0px black` });

  const changeColor = (color) => {
    setTitleColor(color);
    setBoxFrame({ boxShadow: `5px 5px 5px ${color}` });
    //console.log(boxFrame.boxShadow.slice(12));
  }

  return (
    <div className="App">
      <div className="header">
        <Header color={titleColor} />
      </div>
      <div className="grid-container">
        {colors.map((color) => {
          return (
            <Main key={Math.random} color={color} changeColor={() => changeColor(color)} boxFrame={boxFrame} />
          );
        })}
      </div>
    </div>
  );
}

export default App;

