import React from "react"
import styled from "@emotion/styled"
import Tour360 from "./Tour360"

const Container = styled.div`
  margin: 32px 0;
`

const Header = styled.h1`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 16px;
`

const Para = styled.p`
  margin-bottom: 56px;
  max-width: 800px;
  line-height: 150%;
  font-size: 18px;
`

function TourSection() {
  return (
    <Container>
      <Header>
        Let potential clients tour your properties from the comfort of their own
        homes
      </Header>
      <Para>
        Help your properties stand out from the crowd, by engaging potential
        buyers with a high definition virtual viewing.
      </Para>
      <Tour360 src="https://kuula.co/share/collection/7lxHR?fs=1&vr=0&zoom=1&gyro=0&autorotate=0.04&thumbs=3&chromeless=1&logo=1&logosize=177" />
      <Tour360 src="https://kuula.co/share/collection/7ljxY?fs=1&vr=0&zoom=1&gyro=0&autorotate=0.04&thumbs=3&chromeless=1&logo=1&logosize=177" />
    </Container>
  )
}

export default TourSection
