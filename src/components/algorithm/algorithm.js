import React, { useState, useEffect } from "react";
import GolfDataService from "../../services/golf";
import "./algorithm.css";
import AlgorithmForm from "./form/algorithmForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AlgoPickModal from './algoPickModal/algoPickModal.js'

function Algorithm() {

  const [totalWeights, setData] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);


  const childToParent = (input) => {
    setData(input);
    console.log("parent callback.");
   
    console.log("input: " + input);
    console.log("totalweight: " + totalWeights);
    console.log("why does the property of the parent, totalWeightm lag behind the input? Does it matter.." +
     "cant i jsut use the input to render something new?" + totalWeights);
  };

  const childToParentBirdie = (input) => {}

  return (
    <Container fluid className="componentContainer">
      <Row className="containerRow">
        <Col md={4}>
          <Container className="descriptionContainer">
            Set the sliding scales to the weight of your preference,
            based on how important you think each stat is this week.
            5kStats will recommend a pga golfer for the upcoming event Based on your input.
            <br>
            </br>
            <br>
            </br>
            Max total weight: 150
          </Container>
        </Col>
        <Col md={8}>
          <Container className="formContainer">
            <AlgorithmForm childToParent={childToParent} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Algorithm;
