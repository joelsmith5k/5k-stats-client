import React, { useState, useEffect } from "react";
import GolfDataService from "../../services/golf";
import "./pgaComponent.css";
import PlayerDropDownButton from "./playerDropdownButton/playerDropdownButton";

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
      <Container fluid className="pgaContainer">
      <Row>
        <Col className="pgaTitleContainer centered">
          <h1>CURATED 2023 PGA TOUR STATS</h1>
        </Col>
      </Row>
      <Row>
        <Col className="pgaTitleContainer centered">
          <h1>... Loading Players ...</h1>
        </Col>
      </Row>
    </Container>
    )
  }
  return (
    <Container fluid className="pgaContainer">
      <Row>
        <Col className="pgaTitleContainer centered">
          <h1>CURATED 2023 PGA TOUR STATS</h1>
        </Col>
      </Row>
      <Row>
        <Col className="tournamentTitleContainer centered">
          <h1>UPCOMING TOURNAMENT: {tournament.Name}</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="selectionContainer centered">
          <h1>Player Selection</h1>
          <div>
            <PlayerDropDownButton items={players.slice(0, 10)} />
          </div>
        </Col>
        <Col sm={8} className="statsContainer centered">
          <h1>Fantasy Stats</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default PgaComponent;
