import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Logo from "../img/pt-logo.svg"
import NavLink from "../components/NavLink"
import theme from "../gatsby-plugin-theme-ui/index"

const Container = styled.div`
  width: 100%;
  background: ${theme.colors.primary};
`

const Nav = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  padding: 0 16px;
  max-width: 1200px;
`

const NavLinks = styled.ul`
  display: flex;
  @media (max-width: 700px) {
    display: none;
  }
`

const linkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 8px",
  padding: "0.25rem",
  fontSize: "14px",
  display: "block",
  borderBottom: "2px solid transparent",
}

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tours">360° Tours</NavLink>
          <NavLink to="/floorplans">Floorplans</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <AnchorLink to="/#contact">
            <span style={linkStyle}>Contact</span>
          </AnchorLink>
        </NavLinks>
      </Nav>
    </Container>
  )
}

export default Navbar
