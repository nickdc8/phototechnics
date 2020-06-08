import React from "react"
import Wrapper from "../components/Wrapper"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import theme from "../gatsby-plugin-theme-ui/index"
import logo from "../img/pt-logo.svg"
import twitter from "../img/twitter.svg"
import facebook from "../img/facebook.svg"
import instagram from "../img/instagram.svg"

const FooterStyle = styled.div`
  background-color: ${theme.colors.primary};
  height: 200px;
  margin-top: 80px;
  padding: 24px;
`

const Copyright = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  color: ${theme.colors.tertiary};
  opacity: 0.4;
  letter-spacing: 0.8px;
  @media (max-width: 400px) {
    align-items: center;
    text-align: center;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`

const Social = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
`

const Footer = () => {
  return (
    <FooterStyle>
      <Wrapper>
        <Row>
          <Link to="/">
            <img
              src={logo}
              alt=""
              style={{ opacity: "0.4", width: "120px", marginBottom: "16px" }}
            />
          </Link>
          <Social>
            <a href="twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" />
            </a>
          </Social>
        </Row>
        <Copyright>©2020. All rights reserved.</Copyright>
      </Wrapper>
    </FooterStyle>
  )
}

export default Footer
