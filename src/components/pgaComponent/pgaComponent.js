import React, { useState, useEffect } from "react";
import GolfDataService from "../../services/golf";
import courseImage from "../../images/courses/ocean.jpg";
import "./pgaComponent.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PgaComponent() {
  const [tournament, setTournament] = useState({});
  const [playerOne, setPlayerOneStats] = useState({});
  const [playerTwo, setPlayerTwoStats] = useState({});
  const [playerThree, setPlayerThreeStats] = useState({});

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
        setPlayerOneStats(response.data[0]);
        setPlayerTwoStats(response.data[1]);
        setPlayerThreeStats(response.data[2]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container className="pgaComponentContainer">
      <Row className="pgaTitleContainer">
        <Col>
          <h1>CURATED 2023 PGA TOUR STATS</h1>
        </Col>
      </Row>
      <Row className="pgaTopThreeContainer">
        <div>
          <h1>TOP PICK: {playerOne.Name}</h1>
        </div>
      </Row>
      <Row className="pgaTournamentContainer">
        <div className="tournamentContentContainer">
          <h1>TOURNAMENT: {tournament.Name}</h1>
          <h1>VENUE: {tournament.Venue}</h1>
        </div>
      </Row>
    </Container>
  );
}

export default PgaComponent;
