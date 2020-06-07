import React, { useState } from 'react'
import axios from "axios";
import styled from '@emotion/styled'
import theme from '../gatsby-plugin-theme-ui/index'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 56px;
`

const Label = styled.label`
    margin-bottom: 6px;
`

const Input = styled.input`
    background: #FDFDFD;
    border: 1px solid #E6E6E6;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 24px;
`

const TextArea = styled.textarea`
    background: #FDFDFD;
    border: 1px solid #E6E6E6;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 24px;
    height: 189px;
    resize: vertical;
`

const Button = styled.button`
    background: ${theme.colors.secondary};
    display: inline-block;
    color: white;
    padding: 10px 16px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.5px;
    transition: 0.3s;
    border: none;
    cursor: pointer;
    :hover {
        background: #038BD8;
    }
`

const Confirmation = styled.p`
    background: #D4EDDA;
    border: 1px solid #C3E7CB;
    padding: 8px;
    color: #145724;
    border-radius: 4px;
    margin-top: 16px;
`

const ContactForm = () => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://formspree.io/xaypozny",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks! Your form has been submitted", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };

    return(
        <Form onSubmit={handleOnSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" id="name" required />
            <Label htmlFor="email">Email:</Label>
            <Input id="email" type="email" name="email" required />
            <Label htmlFor="message">Message:</Label>
            <TextArea id="message" name="message"></TextArea>
            <Button type="submit" disabled={serverState.submitting}>
            Submit
            </Button>
            {serverState.status && (
            <Confirmation className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
            </Confirmation>
            )}
        </Form>
    )
}

export default ContactForm