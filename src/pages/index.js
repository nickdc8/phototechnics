import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from "react-helmet";
import Hero from '../components/Hero'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#353639" />
        <meta
          name="description"
          content=""
        />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&display=swap" rel="stylesheet"></link>
        <title>PS Phototechnics</title>
      </Helmet>
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}

export default IndexPage