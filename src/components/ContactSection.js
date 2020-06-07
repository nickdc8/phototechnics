import React from 'react'
import ContactForm from './ContactForm'
import Heading from './Heading'
import Wrapper from './Wrapper'
import styled from '@emotion/styled'
import ContactGallery from './ContactGallery'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
      }
`

const ContactSection = () => {
    return(
        <Wrapper>
            <Heading title="Contact" />
            <Container>
                <ContactForm />
                <ContactGallery />
            </Container>
        </Wrapper>
    )
}

export default ContactSection