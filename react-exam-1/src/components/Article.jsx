import React from "react";
import styled from "styled-components";

const ArticleWrapper = styled.article`
    width: 40%;
    height: 300px;
    margin: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Parisienne", cursive;
    h3 {
        margin-bottom: 1rem;
    }
    p {
        font-size: 1rem;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        padding: 2rem;
    }
    @media (min-width: 769px) and (max-width: 991px) {
        width: 100%;
        padding: 2rem;
    }
    @media (min-width: 991px) {
        padding: 2rem;
    }
`;
const Button = styled.button`
    padding: 0.5rem;
    width: 6rem;
    margin-top: 1rem;
    background-color: ${(props) => {
        return props.type == "primary"
            ? "blue"
            : props.type == "normal"
            ? "black"
            : props.type == "danger"
            ? "red"
            : "green";
    }};
    border: 0;
    color: #fff;
`;
export const Article = ({ colorClick, bStyle, article }) => {
    console.log("Article", bStyle);
    return (
        <ArticleWrapper
            color={article.color}
            style={
                bStyle.boxShadow.split(" ")[3] === article.color ? bStyle : null
            }
        >
            <h3>{article.title}</h3>
            <p>{article.text}</p>
            <Button type={article.type} onClick={colorClick}>
                Save
            </Button>
        </ArticleWrapper>
    );
};
