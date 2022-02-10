import React from "react";
import { Card, Link, Form, FloatingLabel, Button } from "react-bootstrap";
import "../../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contactMe">
      <h1 className="m-3">Contact Me</h1>
      <div className="contact-card">
        <ul className="my-5">
          <li className="links my-3">
            <a href="https://www.linkedin.com/in/cameronje/" target="_blank">
              <img
                src="./assets/linkedin.png"
                className="col-1 con-img"
                alt="linkedin"
              />
            </a>{" "}
            Linkedin
          </li>
          <li className="links my-3">
            <a href="https://github.com/elliscj" target="_blank">
              <img
                src="./assets/github-logo.png"
                className="col-1 con-img"
                alt="github"
              />
            </a>{" "}
            GitHub
          </li>
          <li className="links my-3">
            <a href="./assets/ellsicjDevResume.pdf" target="_blank" download>
              <img
                src="./assets/resume-pencil.png"
                className="col-1 con-img"
                alt="resume"
              />
            </a>{" "}
            Resume
          </li>
          <li className="links my-3">
            <a href="mailto: elliscj@colorado.edu" target="_blank">
              <img
                src="./assets/email.png"
                className="col-1 con-img"
                alt="email"
              />
            </a>{" "}
            Email
          </li>
        </ul>
      </div>
    </div>
  );
}

/* <a href="https://www.linkedin.com/in/cameronje/" target="_blank">
            <img
              src="./assets/linkedin.png"
              className="col-1 contact-img"
              alt="linkedin"
            />
            Linkedin
          </a>
          <a href="https://github.com/elliscj" target="_blank">
            <img
              src="./assets/github-logo.png"
              className="col-1 contact-img"
              alt="github"
            />
            GitHub
          </a>
          <a href="mailto: elliscj@colorado.edu">
            <img
              src="./assets/email.png"
              className="col-1 contact-img"
              alt="email"
            />
            Email
          </a>
          <a href="./assets/dev-resume.pdf" target="_blank" download>
            <img
              src="./assets/resume-pencil.png"
              className="col-1 contact-img"
              alt="resume"
            />
            Resume
          </a> */

/* <Card className="conCard col-md-5 col-sm-7 col-8 my-4">
            <Card.Body className="cards">
              <Card.Title className="title">
                Please get in touch through any of my professional links:
              </Card.Title>
              <Card.Text
                className="links"
                href="https://www.linkedin.com/in/cameronje/"
              >
                <a>
                  <img src="./assets/linkedin.png" className="col-1" />
                  Linkedin
                </a>
              </Card.Text>
              <Card.Text href="https://github.com/elliscj">
                <img src="./assets/github-logo.png" className="col-1" />
                GitHub
              </Card.Text>
              <Card.Text href="mailto: elliscj@colorado.edu">
                <img src="./assets/email.png" className="col-1" />
                Email
              </Card.Text>
              <Card.Text>
                <img src="./assets/resume-icon.png" className="col-1" />
                Resume
              </Card.Text>
            </Card.Body>
          </Card> */

/* <Form.Group className="container containerC col-8">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="col-9 m-3"
          >
            <Form.Control type="Name" placeholder="Name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="col-9 m-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Message"
            className="col-9 m-3"
          >
            <Form.Control as="textarea" placeholder="Message" />
          </FloatingLabel>
          <Button
            variant="outline-dark"
            type="submit"
            id="sumbit"
            className="col-4 mx-3"
          >
            Submit
          </Button>
        </Form.Group> */
