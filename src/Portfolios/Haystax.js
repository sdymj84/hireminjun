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

const Haystax = (props) => {
  return (
    <Container>
      <h2>Haystax Platform</h2>
      <div>(Current job)</div>

      <div className="link">
        <a href="https://haystax.com/platform/">Website</a>
      </div>
      <div>
        This is an about page that explains the platform but unfortunately the
        platform is not opened to public.
      </div>
    </Container>
  );
};

export default Haystax;
