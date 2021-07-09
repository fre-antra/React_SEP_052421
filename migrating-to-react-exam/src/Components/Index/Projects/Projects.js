import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Projects = () => {
  return (
      <div className="projects" id="projects">
        <Container fluid>
          <Row>
            <Col sm={12} md={12} className="text-center">
              <div className="projects-header">
                <h1>Projects and Portfolio</h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={12} className="text-center">
              <div className="projects-header-quote">
                <h3>Sharing my endeavors and passions...</h3>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={4} md={4} className="text-center">
              <div className="luvtalk-project">
                <h3>LUV TALK Website</h3>
                <p>Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery,
                  and Wordpress. </p>
                <Row>
                  <Col sm={4} md={4} className="col-sm-offset-4 col-md-offset-4">
                    <div className="project-more-info">
                      <a className="btn btn-default btn-border" href="#">More</a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col sm={4} md={4} className="text-center">
              <div className="strike-zone-project">
                <h3>Strike Zone Analysis</h3>
                <p>Data analytics project completed during my time at the Illinois Math and Science Academy which
                  studied the baseball strike zone based on the state of the game.</p>
                <Row>
                  <Col sm={4} md={4} className="col-sm-offset-4 col-md-offset-4">
                    <div className="project-more-info">
                      <a className="btn btn-default btn-border" href="#">More</a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={2} md={2} className="col-sm-offset-5 col-md-offset-5">
              <div className="see-more-button">
                <a className="btn btn-default btn-border" href="#">More Projects</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Projects;