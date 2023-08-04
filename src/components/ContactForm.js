import React from "react"
import styled from "@emotion/styled"
import theme from "../gatsby-plugin-theme-ui/index"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
`

const Label = styled.label`
  margin-bottom: 6px;
`

const Input = styled.input`
  background: #fdfdfd;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 24px;
`

const TextArea = styled.textarea`
  background: #fdfdfd;
  border: 1px solid #e6e6e6;
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
    background: #038bd8;
  }
`

const Confirmation = styled.p`
  background: #d4edda;
  border: 1px solid #c3e7cb;
  padding: 8px;
  color: #145724;
  border-radius: 4px;
  margin-top: 16px;
`

const ContactForm = () => {
  const displayFunnyJoke = () => {
    const joke =
      "Why don't scientists trust atoms? Because they make up everything!"
    alert(joke)
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    displayFunnyJoke()
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input type="text" name="name" id="name" required />
      <Label htmlFor="email">Email:</Label>
      <Input id="email" type="email" name="email" required />
      <Label htmlFor="message">Message:</Label>
      <TextArea id="message" name="message"></TextArea>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default ContactForm
