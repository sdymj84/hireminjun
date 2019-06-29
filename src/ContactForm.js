import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'

const StyledForm = styled(Form)`
  text-align: left;
`

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(name, email, message)
    // const result = await axios.get('http://localhost:5001/hireminjun/us-central1/sendEmail')
    const result = await axios.get('https://us-central1-hireminjun.cloudfunctions.net/sendEmail', {
      params: { name, email, message }
    })
    console.log(result)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name <span>(required)</span></Form.Label>
        <Form.Control required
          size="lg" type="text"
          placeholder="Enter name"
          onChange={handleNameChange}
          value={name} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email <span>(required)</span></Form.Label>
        <Form.Control required
          size="lg" type="email"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={email} />
      </Form.Group>

      <Form.Group controlId="website">
        <Form.Label>Website</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Enter website" />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message <span>(required)</span></Form.Label>
        <Form.Control required
          size="lg" as="textarea" rows="3"
          onChange={handleMessageChange}
          value={message} />
      </Form.Group>

      <Button size="lg" variant="primary" type="submit">
        Submit
      </Button>
    </StyledForm>
  )
}

export default ContactForm
