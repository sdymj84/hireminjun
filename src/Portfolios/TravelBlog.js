import React from 'react'
import styled from 'styled-components'
import { Carousel } from "react-bootstrap"
import tb1 from '../assets/tb1.png'
import tb2 from '../assets/tb2.png'
import tb3 from '../assets/tb3.png'
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

const TravelBlog = () => {
  return (
    <Container>
      <h2>Travel Blog</h2>

      <div className="link">
        <div>
          <a href="https://github.com/sdymj84/travel-blog">Github page</a>
        </div>
        <div>
          Demo : {' '}
          <a href="https://travel-blog-366f7.firebaseapp.com/">Travel Blog</a>
        </div>
      </div>

      <Carousel
        prevIcon={<IoIosArrowBack size="1.5em" color="black" />}
        nextIcon={<IoIosArrowForward size="1.5em" color="black" />}>
        <Carousel.Item>
          <Image
            src={tb1}
            alt="Travel blog main"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={tb2}
            alt="Country list"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={tb3}
            alt="Create post"
          />
        </Carousel.Item>
      </Carousel>

      <div className="skill">
        <ul>
          <li>React, React Router, Redux</li>
          <li>Firebase – Firestore, Auth, Storage</li>
          <li>react-bootstrap, styled-components</li>
        </ul>
      </div>
    </Container>
  )
}

export default TravelBlog
