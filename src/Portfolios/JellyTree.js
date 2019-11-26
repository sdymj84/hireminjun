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

const JellyTree = () => {
  return (
    <Container>
      <h2>JellyTree E-Commerce Website</h2>
      <div>(JellyTree Store & CMS for seller)</div>

      <div className="link">
        <div>
          <a href="https://github.com/sdymj84/jellytree">Github page</a>
        </div>
        <div>
          Demo : <a href="https://jellytreestore.com">JellyTree Store</a> /{" "}
          <a href="https://jellytreecms.web.app">CMS</a>
        </div>
      </div>

      <div className="iframe-container">
        <iframe
          width="560"
          height="315"
          title="jellytree"
          src="https://www.youtube.com/embed/tgWpkwpdMEY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="skill">
        <ul>
          <li>React, React Hooks, React Router, Redux</li>
          <li>
            Firebase : Firestore (NoSQL), Function (NodeJS), Storage, Auth,
            Hosting
          </li>
          <li>Design : semantic-ui-react, styled-components, react-pose</li>
        </ul>
      </div>
      <div>
        <h2>Project Details</h2>
        <hr />
        <h3>React</h3>
        <ul>
          <li>Create resuable React components</li>
          <li>Redirect without server refresh using React Router</li>
          <li>Make all functional components with React Hooks</li>
          <li>
            Use context to deliver global data and functions between components
            without passing down to children
          </li>
          <li>useState, useEffect, useReducer for managing data effectively</li>
          <li>Connect DB on front-end side for realtime database update</li>
          <li>
            - Whenever product stock changes by purchase or update from CMS,
            stock change updates UI without refresh or any manual update
          </li>
          <li>
            - Gets API key from server to configure Database in front-end (for
            security reason)
          </li>
          <li>Manage data efficiently with Redux</li>
        </ul>

        <h3>Back-End</h3>
        <ul>
          <li>
            Use 3-tier system architecture (React / Firebase(NodeJS) /
            Firestore(DB))
          </li>
          <li>
            Write server side logic such as connecting DB, form validation,
            manipulating data on Firebase functions
          </li>
          <li>Design database with NoSQL - firestore</li>
          <li>Host on firebase and connect to custom domain</li>
        </ul>

        <h3>Design</h3>
        <ul>
          <li>
            Use semantic-ui-react library for beautiful and powerful design
          </li>
          <li>
            Customize styles with styled-components and use props in the style
          </li>
          <li>
            Upgrade user experience with neat animation using react-pose and css
            animation
          </li>
          <li>Conditionally render customized UI for mobile devices</li>
        </ul>
      </div>
    </Container>
  );
};

export default JellyTree;
