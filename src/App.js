import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import PgaComponent from "./components/pgaComponent/pgaComponent";
import NhlComponent from "./components/nhlComponent/nhlComponent";
import NbaComponent from "./components/nbaComponent/nbaComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomePage from "./components/homePage/homePage";
import NavBarComponent from "./components/navBarComponent/navBarComponent";
import FooterComponent from "./components/footerComponent/footerComponent";

const App = () => {
  return (
    <>
    <NavBarComponent />
    <Routes>
    
       <Route path="/" element={<HomePage />} />
       <Route path="/pga" element={<PgaComponent />} />
       <Route path="/nba" element={<NbaComponent />} />
       <Route path="/nhl" element={<NhlComponent />} />
    </Routes>
 </>
  );
};

export default App;
