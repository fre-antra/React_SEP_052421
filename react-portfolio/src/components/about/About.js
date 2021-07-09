import React from 'react'
import { about as data } from './AboutText'
import './About.css'
function About() {
  return (
    <>
      <div className='main'>
        <div className='container-fluid'>
          <div className='row entry'>
            <div className='entry-banner text-center'>
              <h1 id='hello'>Hello, I'm</h1>
              <h1 id='name'>{data.name}</h1>
              <h1 id='person-description'>{data.title}</h1>
            </div>
          </div>
          <div className='row text-center entry'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className='banner-buttons'
            >
              <div className=''>
                <a className='btn btn-default btn-border' href='#about'>
                  Info
                </a>
              </div>
              <div className=''>
                <a className='btn btn-default btn-border' href='#projects'>
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about' id='about'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12 col-md-12 text-center'>
              <div className='about-header'>
                <h1>About Me</h1>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-12 text-center'>
              <div className='about-header-quote'>
                <h3>{data.tagline}</h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              className='about-general-description '
            >
              <div className='col-sm-8 col-md-8 '>
                <h2>General Overview</h2>
                <p>{data.myOverview}</p>
              </div>

              <div
                style={{ display: ' flex', flexDirection: 'column' }}
                className='col-sm-8 col-md-8'
              >
                <h2>Statistics</h2>
                <h5>
                  <em>And for those that don't fancy reading:</em>
                </h5>
                <br />
                <div>
                  <p>
                    {data.gender}, {data.age} years old.
                  </p>
                  <p>Five feet {data.height} inches</p>
                  <p>Favorite fonts:{data.favFonts} </p>
                  <p>Loves to learn new things</p>
                </div>

                <div className='about-option-buttons'>
                  <div className=''>
                    <a
                      href='#contact'
                      className='btn btn-default btn-black-border'
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
