import React, {useState} from 'react';
import './Header.css'

const Header = () => {

  const [title, setTitle] = useState('More than 900 clinic staff members diagnosed with Covid-19 in last two weeks')

  return (
      <div className="header">
        <header>{title}</header>
      </div>
  )
}

export default Header;