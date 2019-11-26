import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import mcg from "../assets/Memory Card Game.png";

const Container = styled.div`
  text-align: left;
  font-weight: 400;

  .link {
    margin: 1em 0;
  }
  a {
    color: #0a7070;
    transition: color 0.3s;
    text-decoration: underline;
    :hover {
      text-decoration: none;
      color: #083b3d;
    }
  }
  .skill {
    margin: 1em 0;
  }
`;
const Image = styled.img`
  width: 100%;
`;

const MemoryCardGame = () => {
  return (
    <Container>
      <h2>Memory Card Game</h2>

      <div className="link">
        <div>
          <a href="https://github.com/sdymj84/memory-card-game">Github page</a>
        </div>
        <div>
          Demo :{" "}
          <a href="https://sdymj84.github.io/memory-card-game//">
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
    </Container>
  );
};

export default MemoryCardGame;
