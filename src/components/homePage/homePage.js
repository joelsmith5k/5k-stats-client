import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homePage.css";
import NBA from "../../images/logos/NBA_logo.png";
import NHL from "../../images/logos/NHL_logo.png";
import PGA from "../../images/logos/PGA_logo.png";

function HomePage() {
  const tiles = [
    { title: "NBA", subtitle: "Coming Soon", image: NBA },
    { title: "NHL", subtitle: "Coming Soon", image: NHL },
    { title: "PGA", subtitle: "", image: PGA },
  ];

  return (
    <div className="homePageComponentContainer flex flex-col items-center h-screen ">
      <div className="flex flex-col h-auto w-5/6 justify-center text-center my-10 px-2 py-5 rounded-lg border-solid border-2 border-slate-300 ">
        <h1>Welcome to 5kstats.</h1>
        <br />
        <h3>A platform for curated sports stats built with ReactJS.</h3>
        <br />
        <h3>NBA, NHL, and PGA insights.</h3>
      </div>

      <div className="flex flex-row flex-wrap justify-around w-screen h-auto my-5 mx-10 overflow-auto border-t-2 border-slate-300">
        {tiles.map((item) => (
          <div
            key={item.title}
            className={
              "w-48 h-48 my-5 rounded-lg border-solid flex flex-col content-center justify-center text-center mx-3 border-2 border-slate-300"
            }
          >
            <img
              src={item.image}
              className="object-scale-down h-36 w-36 mx-auto"
            ></img>
            <h4>{item.subtitle}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
