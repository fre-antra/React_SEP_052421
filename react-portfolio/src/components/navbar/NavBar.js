import React from 'react'
import logo from '../../images/logo.svg'
import { scroller } from 'react-scroll'

function NavBAr() {
  const scrollToSection = classToScrollTo => {
    scroller.scrollTo(classToScrollTo, {
      duration: 100,
      delay: 0,
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
                <li className='pointer' onClick={() => scrollToSection('main')}>
                  Home
                </li>
                <li
                  className='pointer'
                  onClick={() => scrollToSection('projects')}
                >
                  Portfolio
                </li>
                <li
                  className='pointer'
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBAr
