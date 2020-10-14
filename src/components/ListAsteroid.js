import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import image from "../images/Asteroid.jpg";

import "./ListAsteroid.css";

export default function ListAsteroid(props) {
  let history = useHistory();

  const [isSaved, setIsSaved] = useState(false);
  const handleSave = (e) => {
    const date = new Date();
    fetch("http://localhost:8000/api/savedasteroid/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: props.asteroid.full_name,
        saved_by: JSON.parse(localStorage.getItem("user")).id,
        date_saved: date.toISOString(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) setIsSaved(true);
      })
      .catch((error) => console.error(error));

    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  };

  const handleOnClick = (e) => {
    props.setAsteroidDetail(props.asteroid);
    history.push("/asteroid-detail");
  };

  return (
    <div
      style={{ maxWidth: "800px" }}
      className="card m-3"
      onClick={handleOnClick}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={image} className="card-img" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="title">
              <h3 className="card-title">{props.asteroid.full_name} </h3>
              {isSaved ? (
                <h4 className="save-button">
                  <HeartFill fill="red" />
                </h4>
              ) : (
                <h4 className="save-button" onClick={(e) => handleSave(e)}>
                  <Heart fill="red" />
                </h4>
              )}
            </div>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
