import React from 'react'
import ContentBox from './ContentBox/ContentBox';
import styled from "styled-components";

export default function ContentBoxes({ data, handleColor }) {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80%;
    margin: auto;
    @media only screen and (max-width: 770px) {
      display: flex;
      flex-direction: column;
    };
  `;

  return (
    <article>
        <Container>
          {data.map((item) => (
            <ContentBox
              key={item.id}
              heading={item.heading}
              content={item.content}
              button={item.button}
              handleColor={handleColor}
            />
          ))}
        </Container>
    </article>
  );
}
