import React from "react"
import ContactForm from "./ContactForm"
import Heading from "./Heading"
import Wrapper from "./Wrapper"
import styled from "@emotion/styled"
import ContactGallery from "./ContactGallery"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Para = styled.p`
  margin-top: 20px;
  max-width: 760px;
  line-height: 150%;
  font-size: 18px;
`

const Email = styled.a`
  color: #1e1e1e;
  font-weight: 500;
`

const ContactSection = () => {
  return (
    <Wrapper>
      <div id="contact">
        <Heading title="Contact" />
        <Para>
          For more information contact us at{" "}
          <Email href="mailto:info@psphototechnic.com">
            info@ptphototechnic.com
          </Email>{" "}
          or call <Email href="tel:07875525728">07875525728</Email>, or
          alternatively fill in the contact form below.
        </Para>
        <Container>
          <ContactForm />
          <ContactGallery />
        </Container>
      </div>
    </Wrapper>
  )
}

export default ContactSection
