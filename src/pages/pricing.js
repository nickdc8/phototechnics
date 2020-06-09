import React from "react"
import Layout from "../components/Layout"
import Wrapper from "../components/Wrapper"
import Title from "../components/Title"
import Card from "../components/Card"
import Icon1 from "../img/360icon.svg"
import Icon2 from "../img/floorplan.svg"
import styled from "@emotion/styled"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  width: 80%;
  margin: 80px auto;
`

function Prices() {
  return (
    <Layout>
      <Wrapper>
        <Title src="" heading="Pricing" />
        <Container>
          <Card
            imgSrc={Icon1}
            heading="360 Tours"
            info="Pricing starts at £100"
            link="/tours"
          />
          <Card
            imgSrc={Icon2}
            heading="Estate Agent Floor Plans"
            info="Pricing from £50 including site visit"
            link="/floorplans"
          />
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default Prices
