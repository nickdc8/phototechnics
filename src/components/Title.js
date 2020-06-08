import React from "react"
import styled from "@emotion/styled"
import Heading from "../components/Heading"

const TitleStyle = styled.div`
  display: flex;
  align-items: flex-end;
`

const Title = ({ src, heading }) => {
  return (
    <TitleStyle>
      <Heading title={heading} />
      <img src={src} alt="" style={{ width: "77px", marginLeft: "24px" }} />
    </TitleStyle>
  )
}

export default Title
