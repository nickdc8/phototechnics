import React from "react"
import Layout from "../components/Layout"
import Wrapper from "../components/Wrapper"
import Heading from "../components/Heading"
import Head from "../components/Head"
import { Helmet } from "react-helmet"

const NotFound = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="360 degree photography and floorplans for Estate Agents."
        />
      </Helmet>
      <Head title="404" />
      <Wrapper>
        <Heading title="Page not found" />
      </Wrapper>
    </Layout>
  )
}

export default NotFound
