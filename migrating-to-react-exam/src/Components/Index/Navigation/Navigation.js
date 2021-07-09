import React from "react";
import logo from '../../../images/logo.svg';
import {Container, Row, Col} from "react-bootstrap";

const Navigation = () => {

  return (
      <div className="navigation">
        <Container fluid>
          <Row>
            <Col xs={1} sm={1} md={1} lg={1} className="text-center">
              <div className="logo">
                <a href={"index.html"}><img src={logo}/></a>
              </div>
            </Col>

            <Col xs={11} sm={11} md={11} lg={11} className="text-right">
              <div className="primary-nav">
                <ul>
                  <li><a href={"index.html"}>Home</a></li>
                  <li><a href={"portfolio.html"}>Portfolio</a></li>
                  <li><a href={"contact.html"}>Contact</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Navigation;