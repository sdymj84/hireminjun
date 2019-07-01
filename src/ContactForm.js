import React, { useState } from 'react'
import { Form, Alert } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'
import LoaderButton from './components/LoaderButton'
import posed from 'react-pose'

const StyledForm = styled(Form)`
  text-align: left;
  input, textarea {
    box-shadow: none;
  }
`
const PosedAlert = posed.div({
  hidden: {
    opacity: 0,
    y: '-100%',
  },
  visible: {
    opacity: 1,
    y: 0,
  }
})

const StyledAlertSuccess = styled(PosedAlert)`
  position: fixed;
  width: 300px;
  top: 10%;
  left: 50%;
  margin-left: -150px;

  @media (max-width: 578px) {
    width: 80%;
    left: 10%;
    margin-left: 0;
  }
`
const StyledAlertError = styled(PosedAlert)`
  position: fixed;
  width: 600px;
  top: 10%;
  left: 50%;
  margin-left: -300px;

  @media (max-width: 578px) {
    width: 80%;
    left: 10%;
    margin-left: 0;
  }
`

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value)
  }
  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await axios.get('https://us-central1-hireminjun.cloudfunctions.net/sendEmail', {
        params: { name, email, website, message }
      })

      setIsLoading(false)
      setIsSent(true)
      setTimeout(() => {
        setIsSent(false)
      }, 3000);
      setName("")
      setEmail("")
      setWebsite("")
      setMessage("")
    } catch (e) {
      setIsLoading(false)
      setIsError(true)
      setTimeout(() => {
        setIsError(false)
      }, 3000);
    }
  }

  console.log(isSent)

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledAlertSuccess pose={isSent ? "visible" : "hidden"}>
        <Alert variant="success">
          Email has sent successfully!
        </Alert>
      </StyledAlertSuccess>
      <StyledAlertError pose={isError ? "visible" : "hidden"}>
        <Alert variant="danger">
          Something went wrong while sending email, please try again.
        </Alert>
      </StyledAlertError>
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
        <Form.Control
          size="lg" type="text"
          placeholder="Enter website"
          onChange={handleWebsiteChange}
          value={website} />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message <span>(required)</span></Form.Label>
        <Form.Control required
          size="lg" as="textarea" rows="3"
          onChange={handleMessageChange}
          value={message} />
      </Form.Group>

      <LoaderButton
        size="lg" variant="primary" type="submit"
        isLoading={isLoading}
        text="SEND"
        loadingText="SENDING.."
        disabled={isLoading} />
    </StyledForm>
  )
}

export default ContactForm
