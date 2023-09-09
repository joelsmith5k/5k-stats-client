import React, { useState, useEffect } from "react";
import "./nhlComponent.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NhlDataService from "../../services/nhl";

function NhlComponent() {

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

    </div>
  );
}

export default NhlComponent;
