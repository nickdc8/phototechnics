import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Logo from '../img/pt-logo.svg'
import NavLink from '../components/NavLink'
import theme from '../gatsby-plugin-theme-ui/index'


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

const Navbar = () => {
    return(
        <Container>
            <Nav>
                <Link to="/">
                    <img src={Logo} alt=""/>
                </Link>
                <NavLinks>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/tours">360° Tours</NavLink>
                    <NavLink to="/floorplans">Floorplans</NavLink>
                </NavLinks>
            </Nav>
        </Container>
    )
}

export default Navbar
