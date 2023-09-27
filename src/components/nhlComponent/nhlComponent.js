import React, { useState, useEffect } from "react";
import "./nhlComponent.css";
import NhlDataService from "../../services/nhl";
import PieChart from "../common/charts/pie";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import SpinnerComponent from "../common/spinner/spinner";

Chart.register(CategoryScale);

function NhlComponent() {
  const [nhlAggregates, setNhlAggregates] = useState({});
  const [goalsChartData, setGoalsChartData] = useState({});
  const [playersChartData, setPlayersChartData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getNhlAggregates();
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
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
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
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };

    return result;
  };

  const getNhlAggregates = () => {
    NhlDataService.getNhlAggregates()
      .then((response) => {
        let goalsChartData = formatGoalsChartData(response.data);
        let playersChartData = formatPlayersChartData(response.data);
        setNhlAggregates(response.data);
        setGoalsChartData(goalsChartData);
        setPlayersChartData(playersChartData);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isLoading) {
    return <SpinnerComponent></SpinnerComponent>;
  }
  return (
    <div className="flex flex-col justify-center items-center nhlComponentContainer border-2 border-current">
      <div className="flex flex-col justify-center items-center h-36 w-full mx-4">
        <div className="text-center">
          <h2>NHL GOALS AGAINST ANALYSIS</h2>
        </div>
        <div className="w-96 flex-col text-center"></div>
      </div>

      <div className="flex flex-col justify-center items-center h-98 border-2 border-current w-full mx-4 py-5">
        <div className="flex flex-row justify-center items-center w-full">
          <div className="text-center">
            <h4>AGGREGATE GOAL DATA</h4>
            <PieChart chartData={goalsChartData} />
          </div>
          <div className="w-24"></div>
          <div className="text-center">
            <h4>AGGREGATE PLAYER DATA</h4>
            <PieChart chartData={playersChartData} />
          </div>
        </div>
        <br></br>
        <div className="text-center">
          <p>
            This page is designed to test a theory that positional data is underexplored in NHL projections.
            <br></br>
            I analyzed {nhlAggregates.GA} goals from {nhlAggregates.num_players} players against 32 NHL goalies over the 21/22 and 22/23 seasons.
            <br></br>
            Data sourced from www.hockey-reference.com.
            <br></br>
            View individual breakdowns and insights below.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-96 border-2 border-current w-full mx-4">
        <div className="text-center">
          <h3>Individual Goalie Breakdown Section</h3>
        </div>
      </div>
    </div>
  );
}

export default NhlComponent;
