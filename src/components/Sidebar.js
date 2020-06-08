import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const SideMenu = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`

const Sidebar = () => {
  return (
    <SideMenu>
      <Menu right disableAutoFocus>
        <Link to="/">Home</Link>
        <Link to="/floorplans">Floor Plans</Link>
        <Link to="/tours">360° Tours</Link>
        <Link to="/pricing">Pricing</Link>
        <AnchorLink to="/#contact">
          <span>Contact</span>
        </AnchorLink>
      </Menu>
    </SideMenu>
  )
}

export default Sidebar
