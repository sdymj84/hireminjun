import React from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  text-align: left;
`

const ContactForm = () => {
  return (
    <StyledForm>
      <Form.Group controlId="name">
        <Form.Label>Name <span>(required)</span></Form.Label>
        <Form.Control required size="lg" type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email <span>(required)</span></Form.Label>
        <Form.Control required size="lg" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="website">
        <Form.Label>Website</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Enter website" />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message <span>(required)</span></Form.Label>
        <Form.Control required size="lg" as="textarea" rows="3" />
      </Form.Group>

      <Button size="lg" variant="primary" type="submit">
        Submit
      </Button>
    </StyledForm>
  )
}

export default ContactForm
