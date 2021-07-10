import '../style/header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header' id='header'>
      <a href='#main' className='header-logo'>
        <img src='images/logo.svg' alt='logo' />
      </a>

      <div className='header-navbar'>
        <Link to='/' className='header-navlink link title3'>
          Home
        </Link>
        <Link to='/portfolio' className='header-navlink link title3'>
          Portfolio
        </Link>
        <Link to='/contact' className='header-navlink link title3'>
          Contact
        </Link>
      </div>
    </div>
  );
}
