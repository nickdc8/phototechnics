import React from "react"
import styled from "@emotion/styled"
import bgImage from "../img/hero-image.jpg"
import Wrapper from "../components/Wrapper"
import theme from "../gatsby-plugin-theme-ui/index"
import Button from "./Button"

const HeroContainer = styled.div`
  background-image: url(${bgImage});
  height: 580px;
  background-size: cover;
`

const Container = styled.div`
  padding-top: 220px;
  max-width: 574px;
`

const Header = styled.h1`
  color: ${theme.colors.tertiary};
  font-size: 56px;
  margin-bottom: 32px;
  @media (max-width: 900px) {
    font-size: 40px;
  }
`
const Para = styled.p`
  color: ${theme.colors.tertiary};
  font-size: 21px;
  line-height: 140%;
  margin-bottom: 55px;
  @media (max-width: 900px) {
    font-size: 18px;
  }
`

const Hero = () => {
  return (
    <HeroContainer>
      <Wrapper>
        <Container>
          <Header>Bring properties and businesses to life.</Header>
          <Para>
            Our high definition 360° property interior photography helps your
            properties get noticed.{" "}
          </Para>
          <Button to="/#contact">Contact us</Button>
        </Container>
      </Wrapper>
    </HeroContainer>
  )
}

export default Hero
