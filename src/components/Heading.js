import React from "react"
import styled from "@emotion/styled"

const Header = styled.h1`
  margin-top: 72px;
  font-size: 40px;
  @media (max-width: 600px) {
    font-size: 32px;
  }
`

const Heading = ({ title }) => {
  return <Header>{title}</Header>
}

export default Heading
