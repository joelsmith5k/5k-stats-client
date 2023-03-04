import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import FirstImage from "../../images/logos/bull_smirk_green.png";
import SecondImage from "../../images/logos/bull_smirk_blue.png";
import ThirdImage from "../../images/logos/bull_smirk_orange.png";
import "./homeCarousel.css";

function HomeCarousel() {
  return (
    <div className="carouselContainer">
      <Container>
        <Carousel className="carousel">
          <Carousel.Item interval={2500}>
            <img src={FirstImage} alt="Logo1" />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img src={SecondImage} alt="Logo2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={ThirdImage} alt="Logo3" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default HomeCarousel;
