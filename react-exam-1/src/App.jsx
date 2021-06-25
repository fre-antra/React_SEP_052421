import React, { useState } from "react";
import styled from "styled-components";
import { Article } from "./components/Article";
import { Header } from "./components/Header";

const initialData = [
    {
        id: 1,
        color: "blue",
        title: "So to make it easy for you on the weekend",
        type: "primary",
        isSave: false,
        text: "I got it; you  blutooth are tired of usb . So to make it easy for I got it; you  blutooth are tired of usb . So to make it easy for I got it; you  blutooth are tired of usb . So to make it easy for I got it; you  blutooth are tired of usb . So to make it easy for you on the weekend I'm going wireless to drive I got it; you  blutooth are tired of usb . So to make it easy for you on the weekend I'm going wireless to drive",
    },
    {
        id: 2,
        color: "black",
        title: "So to make it easy for you on the weekend",
        type: "normal",
        isSave: false,
        text: "I got it; you  blutooth are tired of usb . So to make it easy for I got it; you  blutooth are tired of usb . So to make it easy for I got it; you  blutooth are tired of usb . So to make it easy for I got it; you  blutooth are tired of usb . So to make it easy for you on the weekend I'm going wireless to drive I got it; you  blutooth are tired of usb . So to make it easy for you on the weekend I'm going wireless to drive",
    },
    {
        id: 3,
        color: "red",
        title: "So to make it easy for you on the weekend",
        type: "danger",
        isSave: false,
        text: "I got it; you  blutooth are tired of usb . So to make it easy for I got it; you  blutooth are tired of usb . So to make it easy for I got it; you  blutooth are tired of usb . So to make it easy for I got it; you  blutooth are tired of usb . So to make it easy for you on the weekend I'm going wireless to drive I got it; you  blutooth are tired of usb . So to make it easy for you on the weekend I'm going wireless to drive",
    },
    {
        id: 4,
        color: "green",
        title: "So to make it easy for you on the weekend",
        type: "success",
        isSave: false,
        text: "I got it; you  blutooth are tired of usb . So to make it easy for I got it; you  blutooth are tired of usb . So to make it easy for I got it; you  blutooth are tired of usb . So to make it easy for I got it; you  blutooth are tired of usb . So to make it easy for you on the weekend I'm going wireless to drive I got it; you  blutooth are tired of usb . So to make it easy for you on the weekend I'm going wireless to drive",
    },
];
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
    const [articles, setArticles] = useState(initialData);
    const [titleColor, setTitleColor] = useState("");
    const [boxStyle, setBoxStyle] = useState({
        boxShadow: `0px 0px 0px black`,
    });
    const changeColor = (color) => {
        setTitleColor(color);
        setBoxStyle({ boxShadow: `2px 2px 5px ${color}` });
    };
    return (
        <AppWrapper>
            <div className="app-header">
                <Header color={titleColor} />
            </div>
            <ArticlesWrapper>
                {articles.map((article) => (
                    <Article
                        colorClick={() => changeColor(article.color)}
                        key={article.id}
                        article={article}
                        bStyle={boxStyle}
                        text={article.text}
                    />
                ))}
            </ArticlesWrapper>
        </AppWrapper>
    );
}
