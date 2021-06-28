import Header from './components/Header/Header'
import ContentBoxes from './components/ContentBoxes/ContentBoxes'
import {data} from './DummyData'
import React, {useState} from 'react'
import styled, { createGlobalStyle } from "styled-components";

function App() {
  const [color, setColor] = useState('')

  const handleColor = (colorName) => {
    setColor(colorName);
  };

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-size: 100%;
    font-family: sans-serif;
  }
`;


  return (
    <div>
      < GlobalStyle/>
      <Header color={color} />
      <ContentBoxes data={data} handleColor={handleColor} />
    </div>
  );
}

export default App;
