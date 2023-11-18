import React, { useState, useEffect } from "react";
import "./nbaComponent.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NbaComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen standardColors">
      <div>
        <h2>NBA PROJECTIONS</h2>
      </div>
      <div>
        <h2>2024/2025 SEASON</h2>
      </div>
    </div>
  );
}

export default NbaComponent;
