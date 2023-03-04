import React, { useState, useEffect } from "react";
import GolfDataService from "../../services/golf";
import courseImage from "../../images/courses/ocean.jpg";
import "./nextTournament.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NextTournament() {
  const [nextTournament, setTournament] = useState({});
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
    <Container className="nextTournamentComponentContainer">
      <Row>
        <Col md={6}>
          <Container className="titleContainer">
            Curated stats and hand-picked bets for every PGA Tour Event.
          </Container>
          <Row>
            <Col md={6}>
              <Container className="statContainer">
                <Container className="statsTitle">
                  Top 3 WGC Players at this Venue
                </Container>
                <Container className="stat">
                  {playerOne.Name}
                  <br></br>
                  Rank: {playerOne.Rank + 1}
                  <br></br>
                  Score: {playerOne.TotalScore}
                </Container>
                <br></br>
                <Container className="stat">
                  {playerTwo.Name}
                  <br></br>
                  Rank: {playerTwo.Rank + 1}
                  <br></br>
                  Score: {playerTwo.TotalScore}
                </Container>
                <br></br>
                <Container className="stat">
                  {playerThree.Name}
                  <br></br>
                  Rank: {playerThree.Rank + 1}
                  <br></br>
                  Score: {playerThree.TotalScore}
                </Container>
              </Container>
            </Col>
            <Col md={6}>
              <Container className="statContainer">
                <Container className="statsTitle">
                  Featured Player Container
                  <br></br>
                </Container>
                <Container className="stat">
                  
                  </Container>
              </Container>
            </Col>
          </Row>
        </Col>

        <Col md={6}>
          <Container
            className="tournamentContainer"
            style={{ backgroundImage: `url(${courseImage})` }}
          >
            <Container className="tournament">
              Next PGA Event: {nextTournament.Name}
              <br></br>
              {nextTournament.StartDate}
              <br></br>
              {nextTournament.Venue}
              <br></br>
              Par: {nextTournament.Par}
              <br></br>
              Yards: {nextTournament.Yards}
            </Container>
          </Container>
          <Container className="immelmanContainer ">
            <Container className="immelmanTitle">
              Mark Immelman's Pick
            </Container>
            <Container className="immelmanPick">
              Corey Connors Top Candadian{" "}
            </Container>
            <Container className="immelmanReason">
              Reason: lorem ipsum strokes gained approach
            </Container>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default NextTournament;
