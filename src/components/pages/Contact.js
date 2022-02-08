import React from "react";
import { Card, Link, Form, FloatingLabel, Button } from "react-bootstrap";
import "../../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contactMe">
        <h1 className="m-3">Contact Me</h1>
        <h5>Please get in touch thgough any of my professional links:</h5>
        <div className="contact-card">
          <a href="https://www.linkedin.com/in/cameronje/" target="_blank">
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
          </a>
        </div>

        {/* <Card className="col-md-5 col-sm-7 col-8 my-4">
            <Card.Body className="cards">
              <Card.Title>
                Please get in touch through any of my professional links:
              </Card.Title>
              <Card.Text>
                <img
                  href="https://www.linkedin.com/in/cameronje/"
                  src="./assets/linkedin.png"
                  className="col-1"
                />
                Linkedin
              </Card.Text>
              <Card.Text>
                <img src="./assets/github-logo.png" className="col-1" />
                GitHub
              </Card.Text>
              <Card.Text>
                <img src="./assets/email.png" className="col-1" />
                Email
                <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem>
              </Card.Text>
              <Card.Text>
                <img src="./assets/resume-icon.png" className="col-1" />
                Resume
                <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem>
              </Card.Text>
              <Card.Text>
                <img src="./assets/resume-icon.png" className="col-1" />
                phone
                <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem>
              </Card.Text>
            </Card.Body>
          </Card> */}

        {/* <Form.Group className="container containerC col-8">
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
        </Form.Group> */}
      </div>
    </>
  );
}
