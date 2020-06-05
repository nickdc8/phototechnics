import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return(
        <nav>
            <h1>PhotoTechnics</h1>
            <ul>
                <li><Link to="/tours">360° Tours</Link></li>
                <li><Link to="/floorplans">Floor Plans</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
