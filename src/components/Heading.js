import React from 'react'
import styled from '@emotion/styled'

const Header = styled.h1`
    margin-top: 72px;
    font-size: 40px;
`

const Heading = ({ title }) => {
    return (
        <Header>{title}</Header>
    )
}

export default Heading