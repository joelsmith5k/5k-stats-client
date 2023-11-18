import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homePage.css";
import NBA from "../../images/logos/NBA_logo.png";
import NHL from "../../images/logos/NHL_logo.png";
import PGA from "../../images/logos/PGA_logo.png";
import { Link } from "react-router-dom";

function HomePage() {
  const tiles = [
    { title: "NBA", subtitle: "Coming Soon", image: NBA, url: "/NBA" },
    { title: "NHL", subtitle: "", image: NHL, url: "/NHL" },
    { title: "PGA", subtitle: "", image: PGA, url: "/PGA" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen standardColors">
      <div className="flex flex-row justify-center">
        <div className="w-5/6 justify-center text-center my-10 px-2 py-5">
          <h1>Welcome to 5kstats.</h1>
          <br />
          <h3>A platform for curated sports stats built with ReactJS.</h3>
          <br />
          <h3>NBA, NHL, and PGA insights.</h3>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center content-center w-full">
        {tiles.map((item) => (
          <div
            key={item.title}
            className={
              "w-48 h-48 my-5 rounded-lg border-solid flex flex-col content-center justify-center text-center mx-8"
            }
          >
            <Link to={item.url}>
              <img
                src={item.image}
                className="object-scale-down h-36 w-36 mx-auto my-3 hover:scale-125"
              ></img>
            </Link>

            <h4>{item.subtitle}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
