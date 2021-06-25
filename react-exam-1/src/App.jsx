import React, { useState } from "react";
import styled from "styled-components";
import { Article } from "./components/Article";
import { Header } from "./components/Header";

const AppWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
    align-items: center;
`;
const ArticlesWrapper = styled.div`
    display: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
export function App() {
    const boxColors = ["blue", "black", "red", "green"];
    const [titleColor, setTitleColor] = useState("");
    const [boxStyle, setBoxStyle] = useState({
        boxShadow: `0px 0px 0px black`,
    });

    const colorChangeHandler = (color) => {
        setTitleColor(color);
        setBoxStyle({ boxShadow: `2px 2px 5px ${color}` });
    };
    return (
        <AppWrapper>
            <div className="app-header">
                <Header color={titleColor} />
            </div>
            <ArticlesWrapper>
                {boxColors.map((color, index) => {
                    return (
                        <Article
                            key={color}
                            color={color}
                            colorClick={() => colorChangeHandler(color)}
                            bStyle={boxStyle}
                        />
                    );
                })}
            </ArticlesWrapper>
        </AppWrapper>
    );
}
