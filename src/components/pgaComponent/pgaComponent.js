import React, { useState, useEffect } from "react";
import GolfDataService from "../../services/golf";
import "./pgaComponent.css";
import PlayerStatsController from "./playerStatsController/playerStatsController";
import SpinnerComponent from "../common/spinner/spinner";

function PgaComponent() {
  const [tournament, setTournament] = useState({});
  const [players, setPlayerOneStats] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState("");

  useEffect(() => {
    getTournament();
    getPlayerStats();
  }, []);

  function modifyDate(tournament) {
    tournament.data.StartDate = tournament.data.StartDate.substring(0, 10);
  }

  function setRanks(players) {
    for (let i = 1; i < 11; i++) {
      players[i - 1].Rank = i;
    }
  }
  const getTournament = () => {
    GolfDataService.getNextTournament()
      .then((response) => {
        modifyDate(response);
        setTournament(response.data);
        let startDate = new Date(response.data.StartDate);
        startDate.setDate(startDate.getDate() + 1); // Because UTC -> PST sets it back a day
        setStartDate(startDate.toDateString());
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getPlayerStats = () => {
    GolfDataService.getPlayerStats()
      .then((response) => {
        setRanks(response.data);
        setPlayerOneStats(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen pgaComponentContainer">
        <SpinnerComponent></SpinnerComponent>
      </div>
    );
  }
  return (
    <div className="flex flex-col text-center items-center pgaComponentContainer">
      <div className="flex flex-col h-24 justify-center my-8">
        <h1>2023 PGA TOUR STATS</h1>
        <h3>Individual Player Projections from sportdata.io</h3>
      </div>

      {isLoading ? (
        <div className="flex flex-col h-auto justify-center ">
          <SpinnerComponent />
        </div>
      ) : (
        <div className="flex flex-col h-screen">
          <div className="h-auto w-auto my-4 py-4 mx-4 px-4 rounded-lg border-solid border-2 border-slate-300">
            <h1>
              {tournament.Name} - {tournament.Venue}
            </h1>
            <h2>Par: {tournament.Par}</h2>
            <h2>Yards: {tournament.Yards}</h2>
            <h2>Start: {startDate}</h2>
          </div>

          <div className="flex fex-row items-center justify-center py-2 px-8 ">
            <PlayerStatsController players={players.slice(0, 10)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PgaComponent;
