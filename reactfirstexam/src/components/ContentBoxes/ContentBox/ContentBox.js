import React from 'react'
import styled from "styled-components";

export default function ContentBox({ heading, content, button, handleColor }) {
  // console.log(heading, content, button);
  const Container = styled.div`
    padding: 1rem;
    margin: 1rem 0px;
    width: 80%;
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
    box-shadow: ;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    min-height: 200px;
    :hover {
      box-shadow: 5px 10px ${button};
    }
  `;
  const Button = styled.button`
    cursor: pointer;
    background-color: ${button};
    border: none;
    color: white;
    padding: 15px;
    margin:10px 0px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 30%;
    border-radius: 10px
  `;

  return (
    <Container>
      <h2>{heading}</h2>
      <div>{content}</div>
      <Button onClick={() => handleColor(button)}>set {button}</Button>
    </Container>
  );
}
