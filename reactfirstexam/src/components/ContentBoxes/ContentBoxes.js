import React from 'react'
import ContentBox from './ContentBox/ContentBox';
import styled from "styled-components";

export default function ContentBoxes({ data, handleColor }) {
  // console.log(data);
  const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media only screen and (max-width: 770px) {
      display: flex;
      flex-direction: column;
    };
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
  `;

  return (
    <div>
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
    </div>
  );
}
