import React, { useState, useEffect } from "react";
import "./nhlComponent.css";
import NhlDataService from "../../services/nhl";
import PieChart from "../common/charts/pie";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import SpinnerComponent from "../common/spinner/spinner";
import DropDownComponent from "../common/dropdown/dropDown";
import GoalieBreakdownComponent from "./goalieBreakdownComponent/goalieBreakdownComponent";
import GoalieGridComponent from "./goalieGridComponent/goalieGridComponent";

Chart.register(CategoryScale);

function NhlComponent() {
  const [nhlAggregates, setNhlAggregates] = useState({});
  const [goalsChartData, setGoalsChartData] = useState({});
  const [playersChartData, setPlayersChartData] = useState({});
  const [goalieBreakdowns, setGoalieBreakdowns] = useState({});
  const [isLoadingAggregates, setLoadingAggregates] = useState(true);
  const [isLoadingGoalies, setLoadingGoalies] = useState(true);

  useEffect(() => {
    getNhlAggregates();
    getGoalieBreakdowns();
  }, []);

  // make this more generic, accept params.. [] for labels, [] for data, etc..
  const formatGoalsChartData = (data) => {
    let result = {
      labels: ["Left Wing", "Center", "Right Wing", "Defense"],
      datasets: [
        {
          label: "Goals By Position",
          data: [data.PL_GA, data.PC_GA, data.PR_GA, data.PD_GA],
          backgroundColor: [
            "#4BC0C0",
            "#ecf0f1",
            "#50AF95",
            "#6F7070",
            "#2a71d0",
          ],
          borderColor: "#291720",
          borderWidth: 2,
        },
      ],
    };

    return result;
  };

  const formatPlayersChartData = (data) => {
    let result = {
      labels: ["Left Wing", "Center", "Right Wing", "Defense"],
      datasets: [
        {
          label: "Players By Position",
          data: [
            data.num_players_PL,
            data.num_players_PC,
            data.num_players_PR,
            data.num_players_PD,
          ],
          backgroundColor: [
            "#4BC0C0",
            "#ecf0f1",
            "#50AF95",
            "#6F7070",
            "#2a71d0",
          ],
          borderColor: "#291720",
          borderWidth: 2,
        },
      ],
      options: {
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    };

    return result;
  };

  const formatGoalieBreakdowns = (goalieBreakdowns) => {
    let alphabetRank = 1;
    goalieBreakdowns.sort((a, b) => a.name.localeCompare(b.name));
    goalieBreakdowns.forEach((g) => {
      g.PlayerID = g._id;
      g.Rank = alphabetRank++;
    });
    return goalieBreakdowns;
  };

  const getNhlAggregates = () => {
    NhlDataService.getNhlAggregates()
      .then((response) => {
        let goalsChartData = formatGoalsChartData(response.data);
        let playersChartData = formatPlayersChartData(response.data);
        setNhlAggregates(response.data);
        setGoalsChartData(goalsChartData);
        setPlayersChartData(playersChartData);
        setLoadingAggregates(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getGoalieBreakdowns = () => {
    NhlDataService.getNhlGoalieStats()
      .then((response) => {
        let formattedData = formatGoalieBreakdowns(response.data);
        setGoalieBreakdowns(formattedData);
        setLoadingGoalies(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isLoadingAggregates) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen nhlComponentContainer">
        <SpinnerComponent></SpinnerComponent>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen standardColors overflow-hidden">
      <div className="flex flex-row h-24 items-center ">
        <div className="text-center py-2">
          <h2>NHL GOALS AGAINST ANALYSIS</h2>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center content-center">
        <div className="text-center py-2">
          <h4>GOALS</h4>
          <PieChart chartData={goalsChartData} />
        </div>
        <div className="text-center py-2">
          <h4>GOALSCORERS</h4>
          <PieChart chartData={playersChartData} />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-full mx-auto text-center py-4 px-2">
          <p>
            This page was built to help test a theory that positional data is
            underexplored in NHL goalscoring projections.
            <br></br>I've analyzed {nhlAggregates.GA} goals (and counting) from{" "}
            {nhlAggregates.num_players} players against 56 NHL goalies over 5 seasons.
            <br></br>
            <br></br>
            "Goaltenders Decide Hockey Games.." - random Reddit user, 2023.
            <br></br>
            <br></br>
            Data sourced from www.hockey-reference.com.
          </p>
        </div>
      </div>

      {isLoadingGoalies ? (
        <div className="flex flex-row items-center h-96 nhlComponentContainer">
          <SpinnerComponent></SpinnerComponent>
        </div>
      ) : (
        <div className="flex flex-row items-center w-full justify-center">
          <div>
            <GoalieBreakdownComponent goalieStats={goalieBreakdowns} />
          </div>
        </div>
      )}
    </div>
  );
}

export default NhlComponent;
