import React from "react"
import Layout from "../components/Layout"
import Wrapper from "../components/Wrapper"
import styled from "@emotion/styled"
import icon from "../img/floorplan.svg"
import Title from "../components/Title"
import FloorPlanGallery from "../components/FloorPlanGallery"
import Head from "../components/Head"
import { Helmet } from "react-helmet"

const Para = styled.p`
  font-size: 18px;
  margin: 24px 0 40px;
  line-height: 28px;
  max-width: 700px;
`

const FloorPlans = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="360 degree photography and floorplans for Estate Agents."
        />
      </Helmet>
      <Head title="Floor Plans" />
      <Wrapper>
        <Title src={icon} heading="Estate Agent Floor Plans" />
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
