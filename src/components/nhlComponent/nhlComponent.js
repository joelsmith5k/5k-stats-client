import React, { useState, useEffect } from "react";
import "./nhlComponent.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NhlDataService from "../../services/nhl";
import PieChart from "../common/charts/pie";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function NhlComponent() {

  const [sampleChartData, setChartData] = useState({
    labels: ["Left Wing", "Center", "Right Wing", "Defense"],
    datasets: [
      {
        label: "Goals By Position",
        data: [2002, 3664, 1444, 1279],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  const [nhlAggregates, setNhlAggregates] = useState({});
  const [nhlGoalieStats, setNhlGoalieStats] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getNhlAggregates();
    getNhlGoalieStats();
  }, []);

  const getNhlAggregates = () => {
    NhlDataService.getNhlAggregates()
      .then((response) => {
        setNhlAggregates(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getNhlGoalieStats = () => {
    NhlDataService.getNhlGoalieStats()
      .then((response) => {
        setNhlGoalieStats(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen nhlComponentContainer h-screen">
      <div>
        <h1>NHL PROJECTIONS</h1>
      </div>

      <div>
        <h1>Goals Against Breakdown</h1>
      </div>
      <div>
        <h1>Total Players Analyzed: {nhlAggregates.num_players}</h1>
      </div>
      <div>
        <h1>Total Goals analyzed: {nhlAggregates.GA}</h1>
      </div>
      <div>
        <h1>Coming Soon..</h1>
      </div>

      <div className="test">
      <PieChart chartData={sampleChartData} />
    </div>

    </div>
  );
}

export default NhlComponent;
