import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "../../styles/Projects.css";

export default function Projects() {
  return (
    // className="col-sm-6 col-xs-10"
    // style={{ width: 400 }}
    <div id="projects">
      <h1 className="py-4">Projects Page</h1>
      <div id="proj-cards">
        <Card className="col-md-5 col-sm-8 col-8 my-4">
          <Card.Img variant="top" src="./assets/watch-iT-screenshot.png" />
          <Card.Body className="cards">
            <Card.Title>Watch-iT</Card.Title>
            <Card.Text>
              An app that allows you to easily create a watchlist, watch
              trailers, and share movie reviews.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Key Technologies: Express.js, Node.js, SQL, Sequelize
            </ListGroupItem>
            {/* <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem> */}
          </ListGroup>
          <Card.Body className="cards">
            <Button
              variant="outline-dark"
              className="mx-2"
              href="https://github.com/elliscj/watchIT"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="outline-dark"
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
            variant="top"
            src="./assets/Screen Shot 2021-11-22 at 6.59.20 PM.png"
          />
          <Card.Body>
            <Card.Title>Brews of Interest</Card.Title>
            <Card.Text>Recommendations for breweries in your area.</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Key Technologies: Open Brewery DB</ListGroupItem>
            {/* <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
          </ListGroup>
          <Card.Body>
            <Button
              variant="outline-dark"
              className="mx-2"
              href="https://github.com/elliscj/project-1"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="outline-dark"
              className="mx-2"
              href="https://elliscj.github.io/project-1/"
              target="_blank"
            >
              Live Site
            </Button>
          </Card.Body>
        </Card>
        <Card className="col-md-5 col-sm-8 col-8 my-4">
          <Card.Img variant="top" src="./assets/weather-screenshot.png" />
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              Get current and forcasted weather for anywhere in the world!
            </Card.Text>
          </Card.Body>
          {/* <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup> */}
          <Card.Body>
            <Button
              variant="outline-dark"
              className="mx-2"
              href="https://github.com/elliscj/hw6-weather-dashboard"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="outline-dark"
              className="mx-2"
              href="https://elliscj.github.io/hw6-weather-dashboard/"
              target="_blank"
            >
              Live Site
            </Button>
          </Card.Body>
        </Card>
        <Card className="col-md-5 col-sm-8 col-8 my-4">
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          {/* <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup> */}
          <Card.Body>
            <Button
              variant="outline-dark"
              className="mx-2"
              href="https://github.com/elliscj/watchIT"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="outline-dark"
              className="mx-2"
              href="https://thawing-fjord-57482.herokuapp.com/"
              target="_blank"
            >
              Live Site
            </Button>
          </Card.Body>
        </Card>
        <Card className="col-md-5 col-sm-8 col-8 my-4">
          <Card.Img variant="top" src="./assets/watch-iT-screenshot.png" />
          <Card.Body>
            <Card.Title>Watch-iT</Card.Title>
            <Card.Text>
              An app that allows you to easily create a watchlist, watch
              trailers, and share movie reviews.
            </Card.Text>
          </Card.Body>
          {/* <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup> */}
          <Card.Body>
            <Button
              variant="outline-dark"
              className="mx-2"
              href="https://github.com/elliscj/watchIT"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="outline-dark"
              className="mx-2"
              href="https://thawing-fjord-57482.herokuapp.com/"
              target="_blank"
            >
              Live Site
            </Button>
          </Card.Body>
        </Card>
        <Card className="col-md-5 col-sm-8 col-8 my-4">
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          {/* <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup> */}
          <Card.Body>
            <Button
              variant="outline-dark"
              className="mx-2"
              href="https://github.com/elliscj/watchIT"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="outline-dark"
              className="mx-2"
              href="https://thawing-fjord-57482.herokuapp.com/"
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
