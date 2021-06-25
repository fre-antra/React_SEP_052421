import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
    color: ${(props) => props.color};
    margin: 1rem 0;
    font-family: "Parisienne", cursive;
`;

export const Header = ({ color }) => {
    return (
        <div>
            <H1 color={color}>I got it; you blutooth are tired of usb</H1>
        </div>
    );
};
