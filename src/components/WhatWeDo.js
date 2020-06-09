import React from "react"
import Wrapper from "../components/Wrapper"
import Card from "../components/Card"
import Icon360 from "../img/360icon.svg"
import Floorplan from "../img/floorplan.svg"
import styled from "@emotion/styled"
import Heading from "../components/Heading"

const Container = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 32px;
`

const WhatWeDo = () => {
  return (
    <Wrapper>
      <Heading title="What we do" />
      <Container>
        <Card
          imgSrc={Icon360}
          heading="360° Estate Agent Tours"
          info="Help your properties stand out from the crowd, by engaging potential buyers with a high definition virtual viewing."
          link="/tours"
        />
        <Card
          imgSrc={Floorplan}
          heading="Estate Agent Floor Plans"
          info="High quality, specification, branding and clear property information makes our floor plans stand out."
          link="/floorplans"
        />
        <Card
          imgSrc={Icon360}
          heading="360° Business Tours"
          info="Allow customers to experience your business virtually from the comfort of their own home."
          link="/tours"
        />
      </Container>
    </Wrapper>
  )
}

export default WhatWeDo
