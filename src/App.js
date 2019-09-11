import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import JellyTree from './Portfolios/JellyTree'
import Apart from './Portfolios/Apart'
import TravelBlog from './Portfolios/TravelBlog'
import Calculator from './Portfolios/Calculator'
import WeeklyWorkNote from './Portfolios/WeeklyWorkNote'
import MemoryCardGame from './Portfolios/MemoryCardGame'
import me from './assets/me.jpg'
import ContactForm from './ContactForm'

const StyledContainer = styled(Container)`
  .title {
    font-size: 1.5em;
    font-weight: bold;
    margin: 1em 0;
    text-align: center;
  }
  .intro {
    font-size: 2.2em;
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
  
`
const Section = styled.div`
  margin: 2em auto;
  text-align: center;
`
const TitleName = styled.div`
  font-weight: bold;
  font-size: 3em;
`
const Separator = styled.hr`
  margin: 60px auto;
  border: 1px solid black;
`
const DotSeparator = styled.hr`
  border: none;
  border-top: 5px dotted black;
  width: 150px;
  margin: 3em auto;
`
const Image = styled.img`
  width: 100%;
`

const App = () => {
  return (
    <StyledContainer>
      <Section className="name">
        <TitleName>Minjun Youn</TitleName>
        <div>Portfolio for React Developer</div>
      </Section>
      <Separator />
      <Section className="intro">
        <div>Hi!</div>
        <div>I’m looking for React developer job.</div>
        <div>
          Please check out my work and get in touch
          if interested.
        </div>
      </Section>
      <Separator />
      <Section className="portfolio">
        <div>Featured Works</div>
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
              I built the real world business project like
              JellyTree E-Commerce and Apart Management Portal, not just play around and
              build personal website.
            </div>
          </Col>

          <Col xl={4} lg={12}>
            <h3>Related Work Experiences</h3>
            <div>
              Have work experience as a s/w test engineer at Samsung
              Mobile for 6 years, which makes me not only be a developer
              with tester’s mindset but also be a great team member who
              knows how to work in a team.
            </div>
          </Col>

          <Col xl={4} lg={12}>
            <h3>Self Motivated</h3>
            <div>
              Implemented test automation script for the team and made
              it usable for real work without any supervision.
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
            <br /><div>
              I’ve been working as a test engineer for several years but I’ve always had passion for development.
            </div><br />
            <div>
              I started implementing test automation script when no one in my team was interested and eventually made my team use it for actual work.
            </div><br />
            <div>
              Since I decided to be a web developer, I made a plan to study 10 hours a week and it turned out I’m having so much fun that I always want more!
            </div><br />
            <div>
              In the last one year, I’ve studied with a lot of videos from Youtube, Pluralsight, Udemy, etc. and I’ve accomplished several projects that you can see on my portfolio. I’m quite confident that I’m ready to work as a web developer.
            </div><br />
            <div>
              I have quite a list of hobbies. My wife calls me a hobby collector. I like playing guitar, piano, sometimes compose songs, watch movies, play billiards (3-cushion), cook Korean food, and make videos.
            </div><br />
            <div>Can’t wait to start my new journey</div>
            <div>and become the person who “Do what your love”!
            </div><br />
          </Col>
        </Row>

      </Section>

      <Separator />

      <Section className="contact">
        <div className="title">Contact</div>
        <Row>
          <Col xl={6} lg={12} className="get-in-touch">
            <div style={{ fontWeight: 'bold' }}>Get in Touch</div><br />
            <div>14220 Conser St. Overland Park, KS 66223</div>
            <div>sdymj84@gmail.com</div>
            <div>913-353-6799</div>
          </Col>
          <Col xl={6} lg={12}>
            <div style={{ fontWeight: 'bold' }}>Send Me a Message</div><br />
            <ContactForm />
          </Col>
        </Row>
      </Section>

      <Separator />
    </StyledContainer >
  )
}

export default App
