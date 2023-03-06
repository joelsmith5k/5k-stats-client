import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PgaComponent from "./components/pgaComponent/pgaComponent";
import NhlComponent from "./components/nhlComponent/nhlComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomePage from "./components/homePage/homePage";
import NavBarComponent from "./components/navBarComponent/navBarComponent";

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <NavBarComponent></NavBarComponent>
      </div>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/pga" element={<PgaComponent />} />
        <Route path="/nhl" element={<NhlComponent />} />
      </Routes>

       <div className="footer">
        <Container className="footerContainer">
          <Container className="footerText">
            Developed by Joel Smith with ReactJS
          </Container>
        </Container>
      </div> 
    </div>
  );
};

export default App;
