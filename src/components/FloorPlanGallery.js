import React from "react"
import styled from "@emotion/styled"
import image1 from "../img/floorplan01.jpg"
import image2 from "../img/floorplan02.jpg"
import image3 from "../img/floorplan03.jpg"
import image5 from "../img/floorplan05.jpg"

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  margin-top: 80px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

function FloorPlanGallery() {
  return (
    <Gallery>
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
      <img src={image5} alt="" />
    </Gallery>
  )
}
export default FloorPlanGallery
