import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styled from "@emotion/styled"
import "../styles/reset.css"
import Sidebar from "../components/Sidebar"
import "../styles/styles.css"

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Navbar />
        <div>{children}</div>
      </Content>
      <Footer />
    </Container>
  )
}

export default Layout
