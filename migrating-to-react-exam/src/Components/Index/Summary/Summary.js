import React from "react";
import logo1 from '../../../images/developerdesign.svg';
import logo2 from '../../../images/responsivedesign.svg';
import logo3 from '../../../images/innovativesolutions.svg';
import logo4 from '../../../images/passion.svg';
import {Container, Row, Col} from "react-bootstrap";

const Summary = () => {
  return (
      <div className="summary">
        <Container fluid>
          <Row>
            <div className="development-summary">
              <Col sm={1} md={1}>
                <div className="development-img">
                  <img className="img-responsive" src={logo1}/>
                </div>
              </Col>

              <Col sm={4} md={4}>
                <div className="development-description">
                  <h3>Development and Design</h3>
                  <p>I aim to put my creativity to the test, designing and building unique, meaningful products for
                    clients or merely for my own interests.</p>
                </div>
              </Col>
            </div>

            <div className="responsive-summary">
              <Col sm={1} md={1} className="col-sm-offset-2 col-md-offset-2">
                <div className="responsive-img">
                  <img className="img-responsive" src={logo2}/>
                </div>
              </Col>

              <Col sm={4} md={4}>
                <div className="responsive-description">
                  <h3>Responsive Layouts</h3>
                  <p>Development and design isn't merely putting information on the site or preferred media outlet. I
                    organize content and present information in an engaging fashion, driving new and unique layouts in
                    tandem with novel solutions and cool animations.</p>
                </div>
              </Col>
            </div>
          </Row>

          <Row>
            <div className="ideas-summary">
              <Col sm={1} md={1}>
                <div className="idea-img">
                  <img className="img-responsive" src={logo3}/>
                </div>
              </Col>

              <Col sm={4} md={4}>
                <div className="idea-description">
                  <h3>Ideas and Solutions</h3>
                  <p>There are still many problems that exist in today's society, including laziness. Luckily, I hope to
                    combat these issues by innovating, developing easy-to-use programs, solutions, or products.</p>
                </div>
              </Col>
            </div>

            <div className="passion-summary">
              <Col sm={1} md={1} className="col-sm-offset-2 col-md-offset-2">
                <img className="img-responsive" src={logo4}/>
              </Col>

              <Col sm={4} md={4}>
                <div className="passion-description">
                  <h3>Passion and Dedication</h3>
                  <p>With my profound interest and commitment to my field of study, my projects rarely go unfinished and
                    my problems are never left unresolved. </p>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
  )
}

export default Summary;