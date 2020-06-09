import React from "react"
import Layout from "../components/Layout"
import Wrapper from "../components/Wrapper"
import Heading from "../components/Heading"
import Head from "../components/Head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <Wrapper>
        <Heading title="Page not found" />
      </Wrapper>
    </Layout>
  )
}

export default NotFound
