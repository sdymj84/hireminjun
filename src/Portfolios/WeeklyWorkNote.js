import React from 'react'
import styled from 'styled-components'
import { Carousel } from "react-bootstrap"
import wwn1 from '../assets/wwn1.png'
import wwn2 from '../assets/wwn2.png'
import wwn3 from '../assets/wwn3.jpg'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Container = styled.div`
  text-align: left;
  font-weight: 400;

  h2 {
    margin-bottom: 0;
    font-weight: bold;
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
const Image = styled.img`
  width: 100%;
`

const WeeklyWorkNote = () => {
  return (
    <Container>
      <h2>WeeklyWorkNote</h2>

      <div className="link">
        <div>
          <a href="https://github.com/sdymj84/weekly-work-note">Github page</a>
        </div>
        <div>
          Demo : {' '}
          <a href="https://worknote.herokuapp.com/users/login/">Weekly Work Note</a>
        </div>
      </div>

      <Carousel
        prevIcon={<IoIosArrowBack size="1.5em" color="white" />}
        nextIcon={<IoIosArrowForward size="1.5em" color="white" />}>
        <Carousel.Item>
          <Image
            src={wwn1}
            alt="Note main screen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={wwn2}
            alt="Wallpaper option screen"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={wwn3}
            alt="Sign in screen"
          />
        </Carousel.Item>
      </Carousel>

      <div className="skill">
        <ul>
          <li>NodeJS – Express with Pug</li>
          <li>MongoDB with Mongoose</li>
          <li>PassportJS (passport-local) for Auth</li>
          <li>Simple CSS styles</li>
        </ul>
      </div>
    </Container>
  )
}

export default WeeklyWorkNote
