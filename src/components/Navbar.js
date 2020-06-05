import React from 'react'
import { Link } from 'gatsby'
import styled from "@emotion/styled"
import Logo from '../img/Logo.svg'
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

const Navbar = () => {
    return(
        <Container>
            <Nav>
                <Link to="/">
                    <img src={Logo} alt=""/>
                </Link>
                <ul>
                    <li><Link to="/tours">360° Tours</Link></li>
                    <li><Link to="/floorplans">Floor Plans</Link></li>
                </ul>
            </Nav>
        </Container>
    )
}

export default Navbar
