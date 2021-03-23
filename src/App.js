import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import JellyTree from "./Portfolios/JellyTree";
import Apart from "./Portfolios/Apart";
import TravelBlog from "./Portfolios/TravelBlog";
import Calculator from "./Portfolios/Calculator";
import WeeklyWorkNote from "./Portfolios/WeeklyWorkNote";
import MemoryCardGame from "./Portfolios/MemoryCardGame";
import me from "./assets/me.jpg";
import ContactForm from "./ContactForm";

const StyledContainer = styled(Container)`
  .title {
    font-size: 1.5em;
    font-weight: bold;
    margin: 1em 0;
    text-align: center;
    color: #4d6179;
  }
  .intro {
    font-size: 2.2em;
    /* background-color: #4d6179;
    color: white;
    padding: 2em; */
  }
  .portfolio {
    font-size: 1.5em;
    font-weight: bold;
  }
  @media (max-width: 786px) {
    font-size: 0.9em;
    width: 70%;
  }
  @media (max-width: 578px) {
    font-size: 0.85em;
    width: 100%;
  }
  .appeal {
    text-align: left;
    font-size: 1.1em;
    div:last-child {
      margin-bottom: 1.5em;
    }
  }
  .about {
    text-align: left;
    font-size: 1.2em;
  }
  .contact {
    font-size: 1.2em;
    .get-in-touch {
      margin-bottom: 2em;
    }
  }
`;
const Section = styled.div`
  margin: 2em auto;
  text-align: center;
`;
const TitleName = styled.div`
  font-weight: bold;
  font-size: 3em;
  color: #2b4768;
`;
const Separator = styled.hr`
  margin: 60px auto;
  border: 1px solid black;
`;
const DotSeparator = styled.hr`
  border: none;
  border-top: 5px dotted black;
  width: 150px;
  margin: 3em auto;
`;
const Image = styled.img`
  width: 100%;
`;

const App = () => {
  return (
    <StyledContainer>
      <Section className="name">
        <TitleName>MINJUN YOUN</TitleName>
        <div style={{ fontSize: 24, color: "#48b8e7", fontWeight: "bold" }}>
          FULL STACK DEVELOPER
        </div>
      </Section>
      <Separator />
      <Section className="intro">
        <div>Hi!</div>
        <div>I’m looking for a Full Stack developer position.</div>
        <div>Please check out my work and feel free to reach me.</div>
      </Section>
      <Separator />
      <Section className="portfolio">
        <div className="title">Featured Works</div>
        <div>(From the most recent to the oldest)</div>
        <DotSeparator />

        <JellyTree />
        <DotSeparator />

        <Apart />
        <DotSeparator />

        <TravelBlog />
        <DotSeparator />

        <Calculator />
        <DotSeparator />

        <WeeklyWorkNote />
        <DotSeparator />

        <MemoryCardGame />
      </Section>
      <Separator />

      <Section className="appeal">
        <div className="title">Reasons to hire me</div>
        <Row>
          <Col xl={4} lg={12}>
            <h3>Business Project</h3>
            <div>
              I built the real-world business project like JellyTree E-Commerce
              and Apart Management Portal, not just play around and build
              personal websites.
            </div>
          </Col>

          <Col xl={4} lg={12}>
            <h3>Related Work Experiences</h3>
            <div>
              I have work experience as a software test engineer at Samsung
              Mobile for 7 years, which makes me not only be a developer with
              tester’s mindset but also be a great team member who knows how to
              work in a team.
            </div>
          </Col>

          <Col xl={4} lg={12}>
            <h3>Self Motivated</h3>
            <div>
              I implemented test automation scripts for the team and made it
              usable for real work without any supervision.
            </div>
          </Col>
        </Row>
      </Section>

      <Separator />

      <Section className="about">
        <div className="title">About Me</div>
        <Row>
          <Col xl={6} lg={12}>
            <Image src={me} alt="My photo" />
          </Col>
          <Col xl={6} lg={12}>
            <br />
            <div>
              I started my first dev job at the beginning of 2020 as someone
              transitioning from a QA role into product development. I very
              quickly became a productive and indispensable member of the
              Engineering team. I joined the small 2-person team focused on
              React migration of the front-end system. But over time those other
              2 people kept getting re-assigned to other work, leaving me to do
              most of the React migration work in 2020 - and I did a great job.
              I got up to speed on React very quickly and was responsible for
              establishing much of the ground-work for how the team would do the
              migration from Angular to React. I also wrote good documentation
              and was responsible for getting others up to speed on how they can
              convert parts of the UI to React. I even took a lead role in
              designing and implementing in React, the new feature that the
              Customer Success team has needed for years.
            </div>
            <br />
            <div>
              My manager told me that he has been very impressed with my
              performance in 2020. I was happy to jump in and help anyone that
              needs assistance. I have quickly grown from a junior developer to
              a key member of the Haystax engineering team. My work on the React
              migration has made me a critical member of the team and our
              company’s success is now directly related to my efforts.
            </div>
            <br />
          </Col>
        </Row>
      </Section>

      <Separator />

      <Section className="contact">
        <div className="title">Contact</div>
        <Row>
          <Col xl={6} lg={12} className="get-in-touch">
            <div style={{ fontWeight: "bold" }}>Get in Touch</div>
            <br />
            <div>1525 Station Center Blvd., Suwanee, GA 30024</div>
            <div>sdymj84@gmail.com</div>
            <div>816-892-0868</div>
          </Col>
          <Col xl={6} lg={12}>
            <div style={{ fontWeight: "bold" }}>Send Me a Message</div>
            <br />
            <ContactForm />
          </Col>
        </Row>
      </Section>

      <Separator />
    </StyledContainer>
  );
};

export default App;
