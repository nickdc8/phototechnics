import React from "react"
import styled from "@emotion/styled"
import Tour360 from "./tours/Tour360"

const Container = styled.div`
  margin: 32px 0;
  padding: 16px;
`

const Header = styled.h1`
  font-size: 26px;
`

const Para = styled.p`
  font-size: 18px;
  margin: 24px 0 40px;
  line-height: 32px;
  max-width: 700px;
`

function TourSection() {
  return (
    <Container>
      <Header>
        Let potential clients tour your properties from the comfort of theirs
      </Header>
      <Para>
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis
        consectetur purus sit amet fermentum.
      </Para>
      <Tour360 src="https://kuula.co/share/collection/7lxHR?fs=1&vr=0&zoom=1&gyro=0&autorotate=0.04&thumbs=3&chromeless=1&logo=1&logosize=177" />
      <Tour360 src="https://kuula.co/share/collection/7ljxY?fs=1&vr=0&zoom=1&gyro=0&autorotate=0.04&thumbs=3&chromeless=1&logo=1&logosize=177" />
    </Container>
  )
}

export default TourSection
