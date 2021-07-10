import React from 'react'
import facebook from '../../images/facebook.svg'
import linkedIn from '../../images/linkedin.svg'
import emailImg from '../../images/email.svg'
import pinterest from '../../images/pinterest.svg'
import { contact as data } from '../contact/ContactText'
import './Footer.css'
function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='media-links footer-flex'>
              <div>
                <div className='facebook social'>
                  <a href='/'>
                    <img className='img-responsive' src={facebook} />
                  </a>
                </div>
              </div>
              <div>
                <div className='linkedin social'>
                  <a href='/'>
                    <img className='img-responsive' src={linkedIn} />
                  </a>
                </div>
              </div>
              <div>
                <div className='pinterest social'>
                  <a href='/'>
                    <img className='img-responsive' src={pinterest} />
                  </a>
                </div>
              </div>
              <div>
                <div className='email-icon social'>
                  <a href='/'>
                    <img className='img-responsive' src={emailImg} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 col-md-6 text-right'>
              <div className='personal-contact phone'>
                <h4>Phone: {data.phoneNo}</h4>
              </div>
            </div>
            <div className='col-sm-6 col-md-6 text-left'>
              <div className='personal-contact email-personal-contact'>
                <h4>Email: {data.email}</h4>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-4 col-md-4 text-center'>
              <div className='company-information'>
                <h3>{data.companyName}</h3>
                <h4>Copyright © 2021</h4>
                <h4>NY</h4>
              </div>
            </div>
            <div className='col-sm-2 col-md-2 text-center'>
              <div className='home-footer'>
                <h4>
                  <a href='/'>Home</a>
                </h4>
              </div>
            </div>
            <div className='col-sm-2 col-md-2 text-center'>
              <div className='portfolio-footer'>
                <h4>
                  <a href='/portfolio'>Portfolio</a>
                </h4>
                <ul>
                  <li>
                    <a href='/'>Project1</a>
                  </li>
                  <li>
                    <a href='/'>Project2</a>
                  </li>
                  <li>
                    <a href='/'>Project3</a>
                  </li>
                  <li>
                    <a href='/'>See All</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-sm-2 col-md-2 text-center'>
              <div className='resume-footer'>
                <h4>
                  <a href='/'>Resume</a>
                </h4>
                <ul>
                  <li>
                    <a href='/'>Download</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-sm-2 col-md-2 text-center'>
              <div className='contact-footer'>
                <h4>
                  <a href='/contact'>Contact</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
