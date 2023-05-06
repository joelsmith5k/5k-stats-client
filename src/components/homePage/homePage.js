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
    <div className="homePageComponentContainer flex flex-col items-center h-screen">
      <div className="flex flex-col h-24 justify-center">
        <h1>Welcome to 5kstats.</h1>
      </div>

      <div className="flex flex-col h-24 justify-center my-3 standardStyle ">
        <h1>Built with ReactJS.</h1>
      </div>
      <div className="flex flex-col h-48 justify-center my-3 standardStyle" >
        <h1>A platform for curated sports stats.</h1>
      </div>
      <div className="flex flex-col h-48 justify-center my-3 standardStyle ">
        <h1>A platform for curated sports stats.</h1>
      </div>

      <div className="flex flex-row flex-wrap justify-center w-screen h-48 my-10 mx-10 standardStyle tileContainer">

        <div class="mx-auto">

        </div>
        <div class="mx-auto">
          
        </div>
        <div class="mx-auto">
          
        </div>

      </div>
    </div>
  );
}

export default HomePage;
