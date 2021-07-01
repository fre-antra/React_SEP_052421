import React from 'react';
import styled from "styled-components";

export default function Header(props) {
const Wrapper = styled.header`
  position: sticky;
  top: 0px;
  background-color: white;
  margin-bottom: 30px;
  border-bottom: 2px solid ${props.color};
`;

const HeaderStyle = styled.h1`
  margin: 30px;
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
