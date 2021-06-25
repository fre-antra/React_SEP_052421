import React from 'react';
import styled from "styled-components";

export default function Header(props) {
console.log(props)
const HeaderStyle = styled.h1`
  font-size: 2em;
  text-align: center;
  color: ${props.color};
`;

  return (
    <div>
      <HeaderStyle>
        Nam libero justo laoreet sit amet cursus sit amet dictum.
      </HeaderStyle>
    </div>
  );
}
