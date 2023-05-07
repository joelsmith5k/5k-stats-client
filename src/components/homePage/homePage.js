import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homePage.css";


function HomePage() {
  return (
    <div className="homePageComponentContainer flex flex-col items-center">
      <div className="flex flex-col h-24 justify-center">
        <h1>Welcome to 5kstats.</h1>
      </div>

      <div className="flex flex-col h-96 justify-center text-center my-3 px-2 rounded-lg border-solid border-2 border-indigo-600 ">
        A platform for curated sports stats.
        <br/>
        Built with ReactJS.
        <br/>
        NBA, NHL, and PGA insights.
      </div>

      <div className="flex flex-row flex-wrap justify-around w-screen h-auto my-5 mx-10 overflow-auto">
        <div class="w-48 h-48 my-5 rounded-lg border-solid border-2 border-indigo-600 justify-center text-center">
          NBA
          <br/>
          Coming soon..
        </div>
        <div class="w-48 h-48 my-5 rounded-lg border-solid border-2 border-indigo-600 justify-center text-center">
          NHL
          <br/>
          Coming soon..
        </div>
        <div class="w-48 h-48 my-5 rounded-lg border-solid border-2 border-indigo-600 justify-center text-center">
          PGA
          <br/>
          Fanatsy Stats from sportsdataio
        </div>
      </div>
    </div>
  );
}

export default HomePage;
