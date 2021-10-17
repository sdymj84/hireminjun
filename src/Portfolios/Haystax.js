import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import h1Img from "../assets/mapbox1.png";
import h2Img from "../assets/mapbox2.png";
import h3Img from "../assets/modal.png";
import h4Img from "../assets/sections.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import StyledContainer from "../components/StyledContainer";

const Image = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
`;

const Haystax = (props) => {
  return (
    <StyledContainer>
      <h2>Haystax Platform</h2>
      <div>(Current job)</div>
      
      <Carousel
        prevIcon={<IoIosArrowBack size="1.5em" color="black" />}
        nextIcon={<IoIosArrowForward size="1.5em" color="black" />}
      >
        <Carousel.Item>
          <Image src={h1Img} alt="Mapbox" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={h2Img} alt="Mapbox" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={h3Img} alt="Modal example" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={h4Img} alt="Sections" />
        </Carousel.Item>
      </Carousel>

      <div className="skill">
        <ul>
          <li>React, React Router, Redux</li>
          <li>Python (Flask)</li>
          <li>css-module, Mapbox</li>
        </ul>
      </div>
    </StyledContainer>
  );
};

export default Haystax;
