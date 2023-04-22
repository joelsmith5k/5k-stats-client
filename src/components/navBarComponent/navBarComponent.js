import React, { useState, useEffect } from "react";
import "./navBarComponent.css";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../images/logos/bull_smirk_green.png";
import { Routes, Route, Link } from "react-router-dom";

function NavBarComponent() {

  return (

    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img src={Logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Brand href="/">5kStats</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Leagues" id="basic-nav-dropdown">
            <NavDropdown.Item bg="light" variant="light">
              <Link to={"/pga"} className="nav-link">
                PGA
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item bg="light" variant="light">
              <Link to={"/nhl"} className="nav-link">
                NHL
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item bg="light" variant="light">
              <Link to={"/nba"} className="nav-link">
                NBA
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export default NavBarComponent;
