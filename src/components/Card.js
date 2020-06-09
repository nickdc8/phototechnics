import React from "react"
import styled from "@emotion/styled"
import theme from "../gatsby-plugin-theme-ui/index"
import Button from "../components/Button"

const CardStyle = styled.div`
  background: ${theme.colors.tertiary};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  padding: 30px;
`

const Heading = styled.h2`
  margin: 24px 0 32px;
  font-size: 18px;
`

const Text = styled.p`
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 140%;
`

const Card = ({ imgSrc, heading, info, link }) => {
  return (
    <CardStyle style={{ textAlign: "center" }}>
      <img src={imgSrc} alt="" />
      <Heading>{heading}</Heading>
      <Text>{info}</Text>
      <Button to={link}>Find out more</Button>
    </CardStyle>
  )
}

export default Card
