import React, { useState, useEffect } from "react";
import "./nbaComponent.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NbaComponent() {
  return (
    <Container className="nbaComponentContainer">
      <Row className="nbaTitleContainer">
        <div>
          <h1>NBA PROJECTIONS</h1>
        </div>
      </Row>
      <Row className="nbaStatContainer">
        <div>
          <h1>COMING SOON..</h1>
        </div>
      </Row>
      <Row className="nbaStatContainer">
        <div>
          <h1>COMING SOON..</h1>
        </div>
      </Row>
    </Container>
  );
}

export default NbaComponent;
