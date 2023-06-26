import React, { useState, useEffect } from "react";
import GolfDataService from "../../services/golf";
import "./pgaComponent.css";
import PlayerStatsController from "./playerStatsController/playerStatsController";
import SpinnerComponent from "../common/spinner/spinner";

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

  function modifyDate(tournament) {
    tournament.data.StartDate = tournament.data.StartDate.substring(0, 10);
  }

  async function setRanks(players) {
    for (let i = 1; i < 11; i++) {
      players[i - 1].Rank = i;
    }
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
        setRanks(response.data);
        setPlayerOneStats(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="flex flex-col text-center items-center h-screen pgaComponentContainer h-screen">
      <div className="flex flex-col h-24 justify-center">
        <h1>CURATED 2023 PGA TOUR STATS</h1>
      </div>


      <div className="flex flex-col h-24 justify-center my-16">
        <h1>UPCOMING TOURNAMENT: {tournament.Name}</h1>
      </div>


      <div className="flex flex-col h-24 justify-center">
        
        <div className="flex flex-col h-24 justify-center my-10">
          {isLoading ? (
            <SpinnerComponent />
          ) : (
            <PlayerStatsController players={players.slice(0, 10)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default PgaComponent;
