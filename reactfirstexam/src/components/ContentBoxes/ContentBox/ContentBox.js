import React from 'react'
import styled from "styled-components";

export default function ContentBox({ heading, content, button, handleColor }) {
  const Container = styled.div`
    padding: 20px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid gray;
    min-height: 300px;
    border-radius: 5px;
    font-family: sans-serif;
    :hover {
      box-shadow: 2px 6px ${button};
    }
  `;
  const Button = styled.button`
    width: 90px;
    cursor: pointer;
    background-color: ${button};
    border: none;
    color: white;
    padding: 4px;
    font-size: 16px;
    border-radius: 4px
  `;

  return (
    <Container>
      <h2>{heading}</h2>
      <div>{content}</div>
      <Button onClick={() => handleColor(button)}>set {button}</Button>
    </Container>
  );
}
