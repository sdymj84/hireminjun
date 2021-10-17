import React from "react";
import styled from "styled-components";

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

const StyledContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default StyledContainer;
