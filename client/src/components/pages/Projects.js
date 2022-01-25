import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "../../styles/Projects.css";

export default function Projects() {
  return (
    // className="col-sm-6 col-xs-10"
    // style={{ width: 400 }}
    // watchit, brews, readme, social, weather, quiz
    <div id="projects">
      <h1 className="py-4">&#60; Projects &#62; &#60; Projects &#62;</h1>
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
              Key Technologies: &#91; Express.js, Node.js, SQL, Sequelize &#93;
              {/* <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem> */}
            </Card.Text>
            <Button
              variant="dark"
              className="mx-2"
              href="https://github.com/elliscj/watchIT"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="dark"
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
            src="./assets/brews-of-interest.png"
          />
          <Card.Body className="cards">
            <Card.Title>Watch-iT</Card.Title>
            <Card.Text>
              An app that allows you to easily create a watchlist, watch
              trailers, and share movie reviews.
            </Card.Text>
            <Card.Text>
              Key Technologies: &#91; Express.js, Node.js, SQL, Sequelize &#93;
              {/* <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem> */}
            </Card.Text>
            <Button
              variant="dark"
              className="mx-2"
              href="https://github.com/elliscj/watchIT"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="dark"
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
            src="./assets/watch-iT-screenshot.png"
          />
          <Card.Body className="cards">
            <Card.Title>Watch-iT</Card.Title>
            <Card.Text>
              An app that allows you to easily create a watchlist, watch
              trailers, and share movie reviews.
            </Card.Text>
            <Card.Text>
              Key Technologies: &#91; Express.js, Node.js, SQL, Sequelize &#93;
              {/* <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem> */}
            </Card.Text>
            <Button
              variant="dark"
              className="mx-2"
              href="https://github.com/elliscj/watchIT"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="dark"
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
            src="./assets/watch-iT-screenshot.png"
          />
          <Card.Body className="cards">
            <Card.Title>Watch-iT</Card.Title>
            <Card.Text>
              An app that allows you to easily create a watchlist, watch
              trailers, and share movie reviews.
            </Card.Text>
            <Card.Text>
              Key Technologies: &#91; Express.js, Node.js, SQL, Sequelize &#93;
              {/* <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem> */}
            </Card.Text>
            <Button
              variant="dark"
              className="mx-2"
              href="https://github.com/elliscj/watchIT"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="dark"
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
            src="./assets/watch-iT-screenshot.png"
          />
          <Card.Body className="cards">
            <Card.Title>Watch-iT</Card.Title>
            <Card.Text>
              An app that allows you to easily create a watchlist, watch
              trailers, and share movie reviews.
            </Card.Text>
            <Card.Text>
              Key Technologies: &#91; Express.js, Node.js, SQL, Sequelize &#93;
              {/* <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem> */}
            </Card.Text>
            <Button
              variant="dark"
              className="mx-2"
              href="https://github.com/elliscj/watchIT"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="dark"
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
            src="./assets/watch-iT-screenshot.png"
          />
          <Card.Body className="cards">
            <Card.Title>Watch-iT</Card.Title>
            <Card.Text>
              An app that allows you to easily create a watchlist, watch
              trailers, and share movie reviews.
            </Card.Text>
            <Card.Text>
              Key Technologies: &#91; Express.js, Node.js, SQL, Sequelize &#93;
              {/* <ListGroupItem>Express.js, Node.js, SQL, Sequelize</ListGroupItem>
            <ListGroupItem>TMDB</ListGroupItem> */}
            </Card.Text>
            <Button
              variant="dark"
              className="mx-2"
              href="https://github.com/elliscj/watchIT"
              target="_blank"
            >
              Repo
            </Button>
            <Button
              variant="dark"
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
