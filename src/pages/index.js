import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import WhatWeDo from "../components/WhatWeDo"
import HorizontalRule from "../components/HorizontalRule"
import ContactSection from "../components/ContactSection"
import Head from "../components/Head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Hero />
      <WhatWeDo />
      <HorizontalRule />
      <ContactSection />
    </Layout>
  )
}

export default IndexPage
