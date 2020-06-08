import React from "react"
import Layout from "../components/Layout"
import Wrapper from "../components/Wrapper"
import Heading from "../components/Heading"
import styled from "@emotion/styled"
import icon from "../img/floorplan.svg"
import FloorPlanGallery from "../components/FloorPlanGallery"

const Title = styled.div`
  display: flex;
  align-items: flex-end;
`

const Para = styled.p`
  font-size: 18px;
  margin: 24px 0 40px;
  line-height: 32px;
  max-width: 700px;
`

const FloorPlans = () => {
  return (
    <Layout>
      <Wrapper>
        <Title>
          <Heading title="Estate Agent Floor Plans" />
          <img
            src={icon}
            alt=""
            style={{ width: "77px", marginLeft: "24px" }}
          />
        </Title>
        <Para>
          A focus on quality, specification, branding and clear property
          information makes our floor plans stand out. All floor plans can be
          intergrated into 360 Tours.
        </Para>
        <FloorPlanGallery />
      </Wrapper>
    </Layout>
  )
}

export default FloorPlans
