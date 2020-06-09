import React from "react"
import Layout from "../components/Layout"
import Wrapper from "../components/Wrapper"
import Icon1 from "../img/360icon.svg"
import Icon2 from "../img/floorplan.svg"
import styled from "@emotion/styled"
import Button from "../components/Button"
import Head from "../components/Head"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  width: 80%;
  margin: 80px auto;
  @media (max-width: 621px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

const Header = styled.h1`
  font-size: 16px;
  margin: 16px 0 26px;
`

const Price = styled.p`
  font-size: 44px;
  font-weight: 700;
  margin-top: 8px;
  letter-spacing: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Starting = styled.p`
  font-weight: 600;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
`

const Pound = styled.span`
  font-size: 24px;
  margin-top: 12px;
  font-weight: 700;
`

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`

const Heading = styled.h1`
  margin-top: 72px;
  font-size: 40px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 32px;
  }
`

function Prices() {
  return (
    <Layout>
      <Head title="Pricing" />
      <Wrapper>
        <Heading>Pricing</Heading>
        <Container>
          <Card>
            <img src={Icon1} alt="" />
            <Header>360° Business Tours</Header>
            <Starting>From</Starting>
            <PriceWrapper>
              <Pound>£</Pound>
              <Price>100</Price>
            </PriceWrapper>
            <Button to="/tours">Find out more</Button>
          </Card>
          <Card>
            <img src={Icon2} alt="" />
            <Header>Floor Plans</Header>
            <Starting>From</Starting>
            <PriceWrapper>
              <Pound>£</Pound>
              <Price>50</Price>
            </PriceWrapper>
            <Button to="/floorplans">Find out more</Button>
          </Card>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default Prices
