import React from 'react';
import styled from "styled-components";

export default function Header(props) {
const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  background-color: white;
  margin: 70px;
  border-bottom: 2px solid ${props.color};
`;

const HeaderStyle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: ${props.color};
`;

  return (
    <Wrapper>
      <HeaderStyle>
        Nam libero justo laoreet sit amet cursus sit amet dictum.
      </HeaderStyle>
    </Wrapper>
  );
}