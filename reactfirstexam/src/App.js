import Header from "./components/Header/Header";
import ContentBoxes from "./components/ContentBoxes/ContentBoxes";
import { data } from "./DummyData";
import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  // console.log(data)
  const [color, setColor] = useState("");
  const [cardsData, setCardsData] = useState([]);
  const handleColor = (colorName) => {
    setColor(colorName);
  };

  useEffect(() => {
    console.log('render')
    return new Promise((res, rej) => {
      setTimeout(() => {
        setCardsData(data);
      }, 1000);
    });
  }, []);

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
  const Loading = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
    font-size: 3em;
    // position:absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%,-50%)
  `;

  if (cardsData.length === 0) {
    return <Loading>Loading data...Please be patient</Loading>;
  } else {
    return (
      <div>
        <GlobalStyle />
        <Header color={color} />
        <ContentBoxes data={cardsData} handleColor={handleColor} />
      </div>
    );
  }
}

export default App;
