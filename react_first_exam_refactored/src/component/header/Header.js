import React from 'react';
import './Header.css';

const Header = ({ headerMsg, headerColor }) => {
  return (
    <h1 className={
      `header header_${headerColor}`
    }>
      {headerMsg}
    </h1>
  );
};

export default Header;
