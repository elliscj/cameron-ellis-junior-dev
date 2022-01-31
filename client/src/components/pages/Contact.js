import React from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <h1 className="m-3">Contact Me</h1>
      <Form.Group className="contactMe container col-8">
        <FloatingLabel controlId="floatingInput" label="Name" className="m-3">
          <Form.Control type="Name" placeholder="Name" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="m-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Message"
          className="m-3"
        >
          <Form.Control as="textarea" placeholder="Message" />
        </FloatingLabel>
        <Button
          variant="outline-secondary"
          type="submit"
          id="sumbit"
          className="mx-3"
        >
          Submit
        </Button>
      </Form.Group>
    </>
  );
}
