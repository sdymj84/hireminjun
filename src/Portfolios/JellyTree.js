import React from "react";
import VideoContainer from "../components/VideoContainer";

const JellyTree = () => {
  return (
    <VideoContainer>
      <h2>JellyTree E-Commerce Website</h2>
      <div>(JellyTree Store & CMS for seller)</div>

      <div className="link">
        <div>
          <a
            href="https://github.com/sdymj84/jellytree"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github page
          </a>
        </div>
        <div>
          Demo :{" "}
          <a
            href="https://jellytreestore.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            JellyTree Store
          </a>{" "}
          /{" "}
          <a
            href="https://jellytreecms.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            CMS
          </a>
        </div>
      </div>

      <div className="iframe-container">
        <iframe
          width="560"
          height="315"
          title="jellytree"
          src="https://www.youtube.com/embed/tgWpkwpdMEY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
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
    </VideoContainer>
  );
};

export default JellyTree;
