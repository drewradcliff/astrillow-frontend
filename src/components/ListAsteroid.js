import React from "react";
import AsteroidPage from "../components/AsteroidPage";
import { Link } from "react-router-dom";

import image from "../images/Asteroid.jpg";

export default function ListAsteroid(props) {
  const handleOnClick = (e) => {
    props.setAsteroidDetail(props.post);
    // window.location = "/asteroid-detail";
  };

  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to="/asteroid-detail"
    >
      <div
        className="card m-3"
        style={{ maxWidth: "800px" }}
        onClick={handleOnClick}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={image} className="card-img" alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{props.post.full_name}</h3>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
