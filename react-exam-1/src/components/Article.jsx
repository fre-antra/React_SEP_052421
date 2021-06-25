import React from "react";
import styled from "styled-components";

const ArticleWrapper = styled.article`
    width: 40%;
    padding: 2rem;
    margin: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: ${(props) => props.boxShadow};
    p {
        font-size: 1rem;
    }
`;
const Button = styled.button`
    padding: 0.5rem;
    width: 6rem;
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
    return (
        <ArticleWrapper
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
