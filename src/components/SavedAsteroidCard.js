import React from "react";
import { Card, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

import { useHistory } from "react-router-dom";
import image from "../images/asteroid-vesta.png";

const SavedAsteroidCard = (props) => {
  let history = useHistory();

  const handleOnClick = () => {
    // fetch(
    //   `https://www.asterank.com/api/asterank?query={"full_name":{"$lt":"${props.asteroid.name}"}}&limit=1`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     props.setAsteroidDetail(data);
    //     history.push("/asteroid-detail");
    //   });
  };

  return (
    <div onClick={handleOnClick}>
      <Card style={{ width: "16rem" }}>
        <Card.Header>{props.asteroid.name}</Card.Header>

        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Img src={image}></Card.Img>
          <Card.Text>Date saved: {Date(props.asteroid.date_saved)}</Card.Text>
          <Button variant="outline-danger" onClick={(e)=> props.handleDelete(e, props.asteroid.id)}>
            <Trash />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SavedAsteroidCard;
