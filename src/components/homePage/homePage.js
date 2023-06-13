import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homePage.css";

function HomePage() {
  const tiles = [
    { title: "NBA", subtitle: "Coming Soon" },
    { title: "NHL", subtitle: "Coming Soon" },
    { title: "PGA", subtitle: "Coming Soon" },
  ];

  return (
    <div className="homePageComponentContainer flex flex-col items-center h-screen">
      <div className="titleContainer flex flex-col h-24 justify-center text-center w-screen">
        <h1>Welcome to 5kstats.</h1>
      </div>

      <div className="flex flex-col h-96 w-2/3 justify-center text-center my-3 px-2 rounded-lg border-solid border-2 border-slate-300 ">
        <h3>A platform for curated sports stats built with ReactJS.</h3>
        <br />
        <h3>NBA, NHL, and PGA insights.</h3>
      </div>

      <div className="flex flex-row flex-wrap justify-around w-screen h-auto my-5 mx-10 overflow-auto">
        {tiles.map((item) => (
          <div class="w-48 h-48 my-5 rounded-lg border-solid  flex flex-col justify-center text-center border-2 border-slate-300">
            <h4>{item.title}</h4>
            <br />
            <h4>{item.subtitle}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
