import React from 'react'
import logo from '../../images/logo.svg'
import { scroller } from 'react-scroll'
import { Link } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  const scrollToSection = classToScrollTo => {
    scroller.scrollTo(classToScrollTo, {
      duration: 100,
      smooth: 'easeInOutQuart',
    })
  }
  return (
    <div className='navigation'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center'>
            <div className='logo'>
              <a>
                <img src={logo} />
              </a>
            </div>
          </div>
          <div className='col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right'>
            <div className='primary-nav'>
              <ul>
                <Link
                  to='/'
                  className='nav-link'
                  onClick={() => scrollToSection('main')}
                >
                  Home
                </Link>
                <Link
                  to='/portfolio'
                  className='nav-link'
                  onClick={() => scrollToSection('projects')}
                >
                  Portfolio
                </Link>
                <Link
                  to='/contact'
                  className='nav-link'
                  onClick={() => scrollToSection('contact')}
                >
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
