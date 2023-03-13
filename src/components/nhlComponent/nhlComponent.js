import React, { useState, useEffect } from "react";
import "./nhlComponent.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NhlComponent() {
  return (
    <Container className="nhlComponentContainer">
      <Row className="nhlTitleContainer">
        <div>
          <h1>NHL PROJECTIONS</h1>
        </div>
      </Row>
      <Row className="nhlStatContainer">
        <div>
          <h1>COMING SOON..</h1>
        </div>
      </Row>
      <Row className="nhlStatContainer">
        <div>
          <h1>COMING SOON..</h1>
        </div>
      </Row>
    </Container>
  );
}

export default NhlComponent;
