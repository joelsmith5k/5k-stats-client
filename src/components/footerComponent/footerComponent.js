import React, { useState, useEffect } from "react";
import "./footerComponent.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FooterComponent() {
  //mx auto centers container, px-4 is padding
  return (
    <div className="flex flex-col h-12 items-center justify-center">
      <h3>.. Footer ..</h3>
    </div>
  );
}

export default FooterComponent;
