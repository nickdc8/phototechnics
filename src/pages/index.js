import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import WhatWeDo from "../components/WhatWeDo"
import HorizontalRule from "../components/HorizontalRule"
import ContactSection from "../components/ContactSection"
import Head from "../components/Head"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="360 degree photography and floorplans for Estate Agents."
        />
      </Helmet>
      <Head title="Home" />
      <Hero />
      <WhatWeDo />
      <HorizontalRule />
      <ContactSection />
    </Layout>
  )
}

export default IndexPage
