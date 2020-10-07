import React from "react";
import Card from "react-bootstrap/Card";

const SavedAAsteroid = (props) => {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Header>Asteroid Header</Card.Header>
      <Card.Body>
        <Card.Title>Asteroid Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Massa
          sapien faucibus et molestie ac feugiat sed lectus vestibulum. Habitant
          morbi tristique senectus et netus.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SavedAAsteroid;
