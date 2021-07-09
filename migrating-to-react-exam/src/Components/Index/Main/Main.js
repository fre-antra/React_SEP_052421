import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Main = () => {
  return (
      <div className="main">
        <Container fluid>
          <Row>
            <div className="entry-banner text-center">
              <h1 id="hello">Hello, I'm</h1>
              <h1 id="name">XXXX</h1>
              <h1 id="person-description">UI Developer. UX Desinger. Problem Solver.</h1>
            </div>
          </Row>

          <Row className="text-center">
            <div className="banner-buttons">
              <Col sm={1} md={1} className="col-sm-offset-5 col-md-offset-5">
                <a className="btn btn-default btn-border" href={"#about"}>Info</a>
              </Col>

              <Col sm={1} md={1}>
                <a className="btn btn-default btn-border" href={"#projects"}>Portfolio</a>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
  )
}

export default Main;