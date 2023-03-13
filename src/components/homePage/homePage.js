import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./homePage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage() {
  return (
    <Container className="homeComponentContainer">
    
      <Row>
        <Col>
          <div className="titleContainer">
            <h1>Welcome to 5kstats.</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="middleContainer">
            <h1>Built with ReactJS.</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="bottomContainer">
            <h1>A platform for curated sports stats.</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
