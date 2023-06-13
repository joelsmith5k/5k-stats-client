import React, { useState, useEffect } from "react";
import GolfDataService from "../../services/golf";
import "./pgaComponent.css";
import PlayerStatsController from "./playerStatsController/playerStatsController";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PgaComponent() {
  const [tournament, setTournament] = useState({});
  const [players, setPlayerOneStats] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getTournament();
    getPlayerStats();
  }, []);

  function modifyDate(response) {
    response.data.StartDate = response.data.StartDate.substring(0, 10);
  }

  const getTournament = () => {
    GolfDataService.getNextTournament()
      .then((response) => {
        modifyDate(response);
        setTournament(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getPlayerStats = () => {
    GolfDataService.getPlayerStats()
      .then((response) => {
        console.log(response.data);
        setPlayerOneStats(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isLoading) {
    return (
      <div>
        <h1>CURATED 2023 PGA TOUR STATS</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col text-center items-center h-screen pgaComponentContainer h-screen">
      <div className="flex flex-col h-24 justify-center">
        <h1>CURATED 2023 PGA TOUR STATS</h1>
      </div>
      <div className="flex flex-col h-24 justify-center">
        <h1>UPCOMING TOURNAMENT: {tournament.Name}</h1>
      </div>
      <div className="flex flex-col h-24 justify-center">
        <h1>Player Selection</h1>
        <div className="flex flex-col h-24 justify-center">
          <PlayerStatsController items={players.slice(0, 10)} />
        </div>
      </div>

      <div className="flex flex-col h-24 justify-center">
        <h1>Fantasy Stats</h1>
      </div>
    </div>
  );
}

export default PgaComponent;
