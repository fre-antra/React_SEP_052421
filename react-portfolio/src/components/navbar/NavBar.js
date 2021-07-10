import React from 'react'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  return (
    <div className='navigation'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center'>
            <div className='logo'>
              <a href='/'>
                <img alt='logo' src={logo} />
              </a>
            </div>
          </div>
          <div className='col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right'>
            <div className='primary-nav'>
              <ul>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
                <Link to='/portfolio' className='nav-link'>
                  Portfolio
                </Link>
                <Link to='/contact' className='nav-link'>
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
