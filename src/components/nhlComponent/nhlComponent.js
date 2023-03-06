import React, { useState, useEffect } from "react";
import "./nhlComponent.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NhlComponent() {
  return (
    <Container >
      <Row>
        <Col>
          <div className="titleContainer">
            <h1>
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="statContainer">
            <h1>COMING SOON..
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="statContainer">
            <h1>
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NhlComponent;
