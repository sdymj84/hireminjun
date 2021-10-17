import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import mcg from "../assets/Memory Card Game.png";
import StyledContainer from "../components/StyledContainer";

const Image = styled.img`
  width: 100%;
`;

const MemoryCardGame = () => {
  return (
    <StyledContainer>
      <h2>Memory Card Game</h2>

      <div className="link">
        <div>
          <a
            href="https://github.com/sdymj84/memory-card-game"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github page
          </a>
        </div>
        <div>
          Demo :{" "}
          <a
            href="https://sdymj84.github.io/memory-card-game//"
            target="_blank"
            rel="noopener noreferrer"
          >
            Memory Card Game
          </a>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <Image src={mcg} alt="Game screen" />
        </Carousel.Item>
      </Carousel>

      <div className="skill">
        <ul>
          <li>HTML, CSS, jQuery</li>
        </ul>
      </div>
    </StyledContainer>
  );
};

export default MemoryCardGame;
