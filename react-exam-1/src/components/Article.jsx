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
export const Article = ({ color, colorClick, bStyle }) => {
    return (
        <ArticleWrapper
            style={bStyle.boxShadow.split(" ")[3] === color ? bStyle : null}
        >
            <h3 className="box__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                alias incidunt ipsa!
            </h3>
            <p className="box__content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                incidunt cupiditate, aspernatur consequuntur porro excepturi
                dolore, velit possimus atque repellat unde veritatis sed odit
                modi. Optio corporis repudiandae labore maiores placeat, nostrum
                illum modi nam dicta dignissimos beatae ad porro?
            </p>
            <Button
                className="btn"
                style={{ backgroundColor: `${color}` }}
                onClick={colorClick}
            >
                Click Me
            </Button>
        </ArticleWrapper>
    );
};
