import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./homePage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterComponent from "../footerComponent/footerComponent";

function HomePage() {
  return (
    <div className="homeComponentContainer flex flex-col items-center">
      <div className="flex flex-col h-24 justify-center">
        <h1>Welcome to 5kstats.</h1>
      </div>

      <div className="flex flex-col h-24 justify-center">
        <h1>Built with ReactJS.</h1>
      </div>

      <div className="flex flex-col h-48 justify-center"></div>

      <div className="flex flex-col h-48 justify-center">
        <h1>A platform for curated sports stats.</h1>
      </div>

      <div className="flex flex-col h-48 justify-center"></div>
    </div>
  );
}

export default HomePage;
