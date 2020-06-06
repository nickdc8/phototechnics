import React from 'react'
import { Link } from 'gatsby';
import theme from '../gatsby-plugin-theme-ui/index'

const LinkStyles = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 16px',
    padding: '0.25rem',
    fontSize: '14px'
}

const activeStyles = {
    background: `${theme.colors.tertiary}`,
    color: `${theme.colors.secondary}`,
}

const NavLink = ({ children, to }) => (
    <Link to={to} style={LinkStyles} activeStyle={activeStyles}>
        {children}
    </Link>
)

export default NavLink