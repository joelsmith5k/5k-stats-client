import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PgaComponent from "./components/pgaComponent/pgaComponent";
import NhlComponent from "./components/nhlComponent/nhlComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/homePage/homePage";
import NavBarComponent from "./components/common/navBarComponent/navBarComponent";

const App = () => {
  return (
    <>
    <NavBarComponent />
    <Routes>   
       <Route path="/" element={<HomePage />} />
       <Route path="/pga" element={<PgaComponent />} />
       <Route path="/nhl" element={<NhlComponent />} />
    </Routes>
 </>
  );
};

export default App;
