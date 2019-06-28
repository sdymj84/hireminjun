import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: left;
  font-weight: 400;

  h2 {
    margin-bottom: 0;
    font-weight: bold;
  }
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
`

const Apart = () => {
  return (
    <Container>
      <h2>Apart Management Portal</h2>
      <div>(One app for managers and one for residents)</div>

      <div className="link">
        <div>
          <a href="https://github.com/sdymj84/apt-client">Github page</a>
        </div>
        <div>
          Demo : {' '}
          <a href="http://apt-client-manager2.s3-website.us-east-2.amazonaws.com/">Manager</a>/{' '}
          <a href="http://apt-client-resident.s3-website.us-east-2.amazonaws.com/">Resident</a>
        </div>
      </div>

      <div className="iframe-container">
        <iframe
          title="apart-video"
          src="https://youtube.com/embed/j66d0ItzLA4"></iframe>
      </div>

      <div className="skill">
        <ul>
          <li>React, React Router</li>
          <li>Serverless framework for managing AWS</li>
          <li>AWS Amplify to use AWS services from client</li>
          <li>AWS : DynamoDB, Cognito, S3, Lambda, API Gateway, CloudWatch</li>
          <li>Design : react-bootstrap, styled-components, react-pose</li>
          <li>ETC : moment, react-datepicker, react-collapsing-table, react-icons, etc.</li>
        </ul>
      </div>
    </Container>
  )
}

export default Apart
