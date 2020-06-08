import React from "react"
import styled from "@emotion/styled"
import Heading from "../components/Heading"

const TitleStyle = styled.div`
  display: flex;
  align-items: flex-end;
`

const Img = styled.img`
  @media (max-width: 650px) {
    display: none;
  }
`

const Title = ({ src, heading }) => {
  return (
    <TitleStyle>
      <Heading title={heading} />
      <Img src={src} alt="" style={{ width: "77px", marginLeft: "24px" }} />
    </TitleStyle>
  )
}

export default Title
