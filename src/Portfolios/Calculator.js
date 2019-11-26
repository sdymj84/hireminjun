import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import cal from "../assets/calculator.png";

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

const Calculator = () => {
  return (
    <Container>
      <h2>Calculator</h2>

      <div className="link">
        <div>
          <a href="https://github.com/sdymj84/calculator.react">Github page</a>
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
    </Container>
  );
};

export default Calculator;
