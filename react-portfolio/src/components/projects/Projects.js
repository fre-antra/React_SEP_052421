import React from 'react'
import { projects, summary, summary1 } from './ProjectsText'
function Projects() {
  return (
    <>
      <div style={{ width: '100%' }} className='summary'>
        <div
          style={{ display: 'flex', justifyContent: 'center' }}
          className='container-fluid '
        >
          <div className='row wrap'>
            {summary.map(sum => (
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
                className='development-summary'
              >
                <div className='sdiv'>
                  <div className='development-img sImg'>
                    <img src={sum.image} />
                  </div>
                </div>
                <div className=''>
                  <div className='development-description'>
                    <h3>{sum.heading}</h3>
                    <p>{sum.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='row wrap'>
            {summary1.map(sum => (
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
                className='development-summary'
              >
                <div className='sdiv'>
                  <div className='development-img sImg'>
                    <img src={sum.image} />
                  </div>
                </div>
                <div className=''>
                  <div className='development-description'>
                    <h3>{sum.heading}</h3>
                    <p>{sum.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='projects' id='projects'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12 col-md-12 text-center'>
              <div className='projects-header'>
                <h1>Projects and Portfolio</h1>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-12 text-center'>
              <div className='projects-header-quote'>
                <h3>Sharing my endeavors and passions...</h3>
              </div>
            </div>
          </div>
          <div className='row'>
            {projects.map(project => (
              <div className='col-sm-4 col-md-4 text-center'>
                <div
                  style={{
                    height: '470px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                  className='luvtalk-project'
                >
                  <h3>{project.project}</h3>
                  <p>{project.Description}</p>
                  <div className='project-more-info'>
                    <a className='btn btn-default btn-border' href='#'>
                      More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='row'>
            <div className='col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5'>
              <div className='see-more-button'>
                <a className='btn btn-default btn-border' href='#'>
                  More Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
