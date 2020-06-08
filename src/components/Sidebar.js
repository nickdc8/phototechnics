import React from 'react'
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const SideMenu = styled.div`
    display: none;
    @media (max-width: 700px) {
        display: block;
    }
`

const Sidebar = () => {
    return (
        <SideMenu>
            <Menu right >
                <Link to="/">Home</Link>
                <Link to="/floorplans">Floor Plans</Link>
                <Link to="/tours">360° Tours</Link>
            </Menu>
        </SideMenu>
    )
}

export default Sidebar