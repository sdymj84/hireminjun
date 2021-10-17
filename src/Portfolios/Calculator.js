import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import cal from "../assets/calculator.png";
import StyledContainer from "../components/StyledContainer";

const Image = styled.img`
  width: 100%;
`;

const Calculator = () => {
  return (
    <StyledContainer>
      <h2>Calculator</h2>

      <div className="link">
        <div>
          <a
            href="https://github.com/sdymj84/calculator.react
          "
            target="_blank"
            rel="noopener noreferrer"
          >
            Github page
          </a>
        </div>
        <div>
          Demo :{" "}
          <a href="https://travel-blog-366f7.firebaseapp.com/">Calculator</a>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <Image src={cal} alt="Calculator" />
        </Carousel.Item>
      </Carousel>

      <div className="skill">
        <ul>
          <li>React</li>
        </ul>
      </div>
    </StyledContainer>
  );
};

export default Calculator;
