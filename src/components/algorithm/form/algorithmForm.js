import React, { useState, useEffect } from "react";
import GolfDataService from "../../../services/golf";
import "./algorithmForm.css";
import Form from "react-bootstrap/Form";
import RangeSlider from "react-bootstrap/FormRange";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AlgoPickModal from '../algoPickModal/algoPickModal.js'

function AlgorithmForm(props) {
  const [birdieValue, setBirdieValue] = React.useState(50);
  const [fairwayValue, setFairwayValue] = React.useState(50);
  const [girValue, setGirValue] = React.useState(50);

  const [isLoading, setLoading] = useState(false);

  const [modalShow, setModalShow] = React.useState(false);

  const weightThreshold = 150;

  function simulateAPiCall() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  useEffect(() => {
    if (isLoading) {
      simulateAPiCall().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleSubmission = () => {
    console.log("handle submission function.");
    let birdieInput = parseInt(birdieValue);
    let fairwayInput = parseInt(fairwayValue);
    let girInput = parseInt(girValue);
    let sum = birdieInput + fairwayInput + girInput;
    if (sum > weightThreshold) {
      console.log("Sum must be <= 150");
      setLoading(true);
    } else {
      props.childToParent(sum);
      setLoading(true);
      setModalShow(true);
    }
  };

  return (
    <Container className="algorithmFormComponentContainer">
      <Row className="formRow">
        <Col md={8} s={12} xs={12}>
          <Form>
            <Form.Group>
              <Container className="selectionContainer">
                <Form.Label>Birdies</Form.Label>
                <RangeSlider
                  value={birdieValue}
                  onChange={(e) => setBirdieValue(e.target.value)}
                />
                {birdieValue}
              </Container>

              <Container className="selectionContainer">
                <Form.Label>Fairways</Form.Label>
                <RangeSlider
                  value={fairwayValue}
                  onChange={(e) => setFairwayValue(e.target.value)}
                />
                {fairwayValue}
              </Container>

              <Container className="selectionContainer">
                <Form.Label>GIRS</Form.Label>
                <RangeSlider
                  value={girValue}
                  onChange={(e) => setGirValue(e.target.value)}
                />
                {girValue}
              </Container>
            </Form.Group>
            <Container className="buttonContainer">
              <Button
                onClick={!isLoading ? handleSubmission : null}
                variant="secondary"
                size="lg"
              >
                {" "}
                {isLoading ? "Loading…" : "Get Pick"}{" "}
              </Button>
            </Container>
          </Form>
        </Col>
      </Row>

      <AlgoPickModal show={modalShow} dynData={birdieValue}
        onHide={() => setModalShow(false)}>
        </AlgoPickModal>
    </Container>
  );
}

export default AlgorithmForm;
