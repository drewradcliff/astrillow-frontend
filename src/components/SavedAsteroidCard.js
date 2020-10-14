import React from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import image from "../images/Asteroid.jpg";

const SavedAsteroidCard = (props) => {
  let history = useHistory();

  const handleOnClick = () => {
    props.setAsteroidDetail(props.asteroid);
    history.push("/asteroid-detail");
  };

  return (
    <div onClick={handleOnClick}>
      <Card style={{ width: "16rem" }}>
        <Card.Header>{props.asteroid.name}</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Img src={image}></Card.Img>
          <Card.Text>Date saved: {Date(props.asteroid.date_saved)}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SavedAsteroidCard;
