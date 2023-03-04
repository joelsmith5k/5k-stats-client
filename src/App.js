import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NextTournament from "./components/nextTournament/nextTournament";
import Algorithm from "./components/algorithm/algorithm";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./images/logos/bull_smirk_green.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import HomePage from "./components/homePage/homePage";

const App = () => {
  return (
    <div className="App">

        <div className="navbar">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <img src={Logo} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Brand href="/">5kStats</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Golf" id="basic-nav-dropdown">
                    <NavDropdown.Item bg="light" variant="light">
                      <Link to={"/golf"} className="nav-link">
                        Tournament Info
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to={"/golf/stats"} className="nav-link">
                        Algorithm
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/golf" element={<NextTournament />} />
        <Route path="/golf/stats" element={<Algorithm />} />
      </Routes>

      <div className="footer">
          <Container className="footerContainer">
            <Container className="footerText">
              Developed by @joelsmith5k, donate to
              0x2a07c01797e01645e25f50459e5897BD0543409b /\
            </Container>
          </Container>
      </div>

      
    </div>
  );
}

export default App;
