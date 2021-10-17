import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: left;
  font-weight: 400;

  .iframe-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    margin: 1em 0;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
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

const VideoContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default VideoContainer;
