import React from "react"

import Form from "react-bootstrap/Form"
import FormGroup from "react-bootstrap/FormGroup"
import FormControl from "react-bootstrap/FormControl"
import FormLabel from "react-bootstrap/Form"
import FormText from "react-bootstrap/FormText"
import InputGroup from "react-bootstrap/InputGroup"

import styled from "styled-components"

const FormWrapper = styled(Form)``

const EmailForm = () => {
  return (
    <div style={{ padding: "0px 20px" }}>
      <FormWrapper>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>First and last name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
          <FormControl />
        </InputGroup>
      </FormWrapper>
      <hr />
    </div>
  )
}

export default EmailForm
