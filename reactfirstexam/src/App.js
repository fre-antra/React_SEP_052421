import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import './App.css'


const App = () => {

  const blue = 1, black = 2, red = 3, green = 4

  return (
      <>
        <Header/>
        <div className="main-section">
          <div className="cards-1">
            <Card num={blue}/>
            <Card num={black}/>
          </div>
          <div className="cards-2">
            <Card num={red}/>
            <Card num={green}/>
          </div>
        </div>
      </>
  );
}

export default App;