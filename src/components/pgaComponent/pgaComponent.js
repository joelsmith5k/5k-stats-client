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
      <div className="flex flex-col justify-center items-center h-screen standardColors">
        <SpinnerComponent></SpinnerComponent>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center min-h-screen standardColors overflow-hidden py-4">
      <div className="flex flex-row justify-center">
        <div className="text-center my-8 py-4 px-4 mx-2 rounded-lg border-solid border-2 border-slate-300">
          <h1>2023 PGA TOUR STATS</h1>
          <br />
          <h3>Individual Player Projections</h3>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-row h-auto justify-center">
          <SpinnerComponent />
        </div>
      ) : (
        <>
          <div className="flex flex-row justify-center ">
            <div className="my-4 mx-4 px-4 text-center">
              <h2>
                {tournament.Name} - {tournament.Venue}
              </h2>
              <h2>Par: {tournament.Par}</h2>
              <h2>Yards: {tournament.Yards}</h2>
              <h2>Start: {startDate}</h2>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <PlayerStatsController players={players.slice(0, 10)} />
          </div>
        </>
      )}
    </div>
  );
}

export default PgaComponent;
