import '../style/header.css';
export default function Header() {
  return (
    <div className='header' id='header'>
      <div className='header-logo'>
        <a href='#'>
          <img src='images/logo.svg' alt='logo' />
        </a>
      </div>

      <div className='header-navbar'>
        <a href='#' className='header-navlink link'>
          Home
        </a>
        <a href='#portfolio' className='header-navlink link'>
          Portfolio
        </a>
        <a href='#contact' className='header-navlink link'>
          Contact
        </a>
      </div>
    </div>
  );
}
