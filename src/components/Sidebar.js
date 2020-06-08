import React from 'react'
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby'


const Sidebar = () => {
    return (
        <Menu right >
            <Link to="/">Home</Link>
            <Link to="/floorplans">Floor Plans</Link>
            <Link to="/tours">360° Tours</Link>
        </Menu>
    )
}

export default Sidebar