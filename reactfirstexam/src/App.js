import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import './App.css'


const App = () => {

  const colors = ['blue', 'black', 'red', 'green']

  return (
      <>
        <Header/>
        <div className="main-section">
          {colors.map(color => {
            return <Card color={color} key={color}/>
          })}
        </div>
      </>
  );
}

export default App;