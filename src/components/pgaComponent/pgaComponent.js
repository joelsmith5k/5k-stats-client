import React, { useState, useEffect } from "react";
import GolfDataService from "../../services/golf";
import courseImage from "../../images/courses/ocean.jpg";
import "./pgaComponent.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PgaComponent() {
  const [pgaComponent, setTournament] = useState({});
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

    <Container >
      <Row>
        <Col>
          <div className="titleContainer">
            <h1>HEADER ROW
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="topThreeContainer">
            <h1>TOP THREE ROW: Test {playerOne.Name}
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="tournamentContainer">
            <h1>TOURNAMENT ROW
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PgaComponent;
