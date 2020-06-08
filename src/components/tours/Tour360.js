import React from "react"
import styled from "@emotion/styled"

const Iframe = styled.iframe`
  margin-bottom: 40px;
  background: black;
  background-image: url();
`

function Tour360({ src }) {
  return (
    <Iframe
      style={{ width: "100%", height: "540px" }}
      allow="vr,gyroscope,accelerometer,fullscreen"
      scrolling="no"
      src={src}
      allowFullScreen
      allowvr="yes"
    ></Iframe>
  )
}

export default Tour360
