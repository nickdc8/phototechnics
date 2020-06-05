import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from "@emotion/styled"
import '../styles/reset.css'

const Container = styled.div`
    margin: 0 auto;
`

const Layout = ({ children }) => {
    return (
        <Container>
            <Navbar />
                <div>
                    {children}
                </div>
            <Footer />
        </Container>
    )
}

export default Layout