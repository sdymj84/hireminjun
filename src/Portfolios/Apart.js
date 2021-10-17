import React from "react";
import VideoContainer from "../components/VideoContainer";

const Apart = () => {
  return (
    <VideoContainer>
      <h2>Apart Management Portal</h2>
      <div>(One app for managers and one for residents)</div>

      <div className="link">
        <div>
          <a href="https://github.com/sdymj84/apt-client"
            target="_blank"
            rel="noopener noreferrer"
          >Github page</a>
        </div>
      </div>

      <div className="iframe-container">
        <iframe
          title="apart-video"
          src="https://youtube.com/embed/j66d0ItzLA4"
        ></iframe>
      </div>

      <div className="skill">
        <ul>
          <li>React, React Router</li>
          <li>Serverless framework for managing AWS</li>
          <li>AWS Amplify to use AWS services from client</li>
          <li>AWS : DynamoDB, Cognito, S3, Lambda, API Gateway, CloudWatch</li>
          <li>Design : react-bootstrap, styled-components, react-pose</li>
          <li>
            ETC : moment, react-datepicker, react-collapsing-table, react-icons,
            etc.
          </li>
        </ul>
      </div>
    </VideoContainer>
  );
};

export default Apart;
