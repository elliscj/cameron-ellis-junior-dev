import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "../../styles/Projects.css";

export default function Projects() {
  return (
    // className="col-sm-6 col-xs-10"
    // style={{ width: 400 }}
    // watchit, brews, readme, social, weather, quiz
    <div id="projects">
      <h1 className="py-4">Projects</h1>
      <div id="proj-cards">
        <Card className="col-md-5 col-sm-8 col-8 my-4">
          <Card.Img
            className="image"
            variant="top"
            src="./assets/watch-iT-screenshot.png"
          />
          <Card.Body className="cards">
            <Card.Title>Watch-iT</Card.Title>
            <Card.Text>
              An app that allows you to easily create a watchlist, watch
              trailers, and share movie reviews.
            </Card.Text>
            <Card.Text>
              Key Technologies: &#91; Express.js, Node.js, SQL, Sequelize,
              Bootstrap &#93;
              {/* <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem> */}
            </Card.Text>
            <Button
              variant="outline-light"
              className="mx-2"
              href="https://github.com/elliscj/watchIT"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="outline-light"
              className="mx-2"
              href="https://thawing-fjord-57482.herokuapp.com/"
              target="_blank"
            >
              Live Site
            </Button>
          </Card.Body>
        </Card>

        <Card className="col-md-5 col-sm-8 col-8 my-4">
          <Card.Img
            className="image"
            variant="top"
            src="./assets/brew-of-interest.png"
          />
          <Card.Body className="cards">
            <Card.Title>Brews of Interest</Card.Title>
            <Card.Text>
              This simple app allows you to find local breweries in your area,
              and shows their location on a map.
            </Card.Text>
            <Card.Text>
              Key Technologies: &#91; Open Brewery Database, Javascript &#93;
              {/* <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem> */}
            </Card.Text>
            <Button
              variant="outline-light"
              className="mx-2"
              href="https://github.com/elliscj/project-1"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="outline-light"
              className="mx-2"
              href="https://elliscj.github.io/project-1/"
              target="_blank"
            >
              Live Site
            </Button>
          </Card.Body>
        </Card>

        <Card className="col-md-5 col-sm-8 col-8 my-4">
          <Card.Img
            className="image"
            variant="top"
            src="./assets/weather-screenshot.png"
          />
          <Card.Body className="cards">
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              This is a simple yet effective weather dashboard, showing you
              current weather conditions as well as a 5 day future forcast.
              Daily information includes; high and low temperatures, humidity,
              wind speed, UV rating.
            </Card.Text>
            <Card.Text>
              Key Technologies: &#91; Javascript, Bootstrap, Open Weather API
              &#93;
              {/* <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem> */}
            </Card.Text>
            <Button
              variant="outline-light"
              className="mx-2"
              href="https://github.com/elliscj/hw6-weather-dashboard"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="outline-light"
              className="mx-2"
              href="https://elliscj.github.io/hw6-weather-dashboard/"
              target="_blank"
            >
              Live Site
            </Button>
          </Card.Body>
        </Card>

        <Card className="col-md-5 col-sm-8 col-8 my-4">
          <Card.Img
            className="image"
            variant="top"
            src="./assets/readme-generator.png"
          />
          <Card.Body className="cards">
            <Card.Title>Readme Generator</Card.Title>
            <Card.Text>
              This is a command line application that allows you to quickly
              create a high quality readme without having to worry about
              formatting it. Simply answer the questions and it will generate
              automatically with links and a working table of contents.
            </Card.Text>
            <Card.Text>
              Key Technologies: &#91; Node.js &#93;
              {/* <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem> */}
            </Card.Text>
            <Button
              variant="outline-light"
              className="mx-2"
              href="https://github.com/elliscj/readme-generator"
              target="_blank"
            >
              Repo
            </Button>
            {/* <Button
              variant="dark"
              className="mx-2"
              href="https://thawing-fjord-57482.herokuapp.com/"
              target="_blank"
            >
              Live Site
            </Button> */}
          </Card.Body>
        </Card>

        <Card className="col-md-5 col-sm-8 col-8 my-4">
          <Card.Img
            className="image"
            variant="top"
            src="./assets/social-network-api-screenshot.png"
          />
          <Card.Body className="cards">
            <Card.Title>Social Media API</Card.Title>
            <Card.Text>
              This backend-only app demonstrates the power of MongoDB and the
              simplicity of creating relationships between collections.
            </Card.Text>
            <Card.Text>
              Key Technologies: &#91; Express.js, Node.js, MongoDB, Mongoose
              &#93;
              {/* <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem> */}
            </Card.Text>
            <Button
              variant="outline-light"
              className="mx-2"
              href="https://github.com/elliscj/social-media-api"
              target="_blank"
            >
              Repo
            </Button>
            {/* <Button
              variant="dark"
              className="mx-2"
              href="https://thawing-fjord-57482.herokuapp.com/"
              target="_blank"
            >
              Live Site
            </Button> */}
          </Card.Body>
        </Card>

        <Card className="col-md-5 col-sm-8 col-8 my-4">
          <Card.Img
            className="image"
            variant="top"
            src="./assets/jate-screenshot.png"
          />
          <Card.Body className="cards">
            <Card.Title>J.A.T.E</Card.Title>
            <Card.Text>
              Just Another Text Editor is a simple text editor PWA that utilizes
              indexedDB to store and retrieve text.
            </Card.Text>
            <Card.Text>
              Key Technologies: &#91; Express.js, Node.js, IndexedDB, PWA &#93;
              {/* <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem> */}
            </Card.Text>
            <Button
              variant="outline-light"
              className="mx-2"
              href="https://github.com/elliscj/JATE"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="outline-light"
              className="mx-2"
              href="https://obscure-plains-41681.herokuapp.com/"
              target="_blank"
            >
              Live Site
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
