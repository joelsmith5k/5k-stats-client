import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import HomeCarousel from "./homeCarousel";
import "./homePage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage() {
  return (
    <Container className="componentContainer">
      <HomeCarousel />

      <Row>
        <Col>
          <Container classname="infoContainer">Welcome to 5kstats.</Container>
          <Container classname="infoContainer">
            Built with ReactJS.
          </Container>
          <Container classname="infoContainer">
            Hand-picked stats by JS5K
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
