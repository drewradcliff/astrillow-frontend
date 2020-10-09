import React from "react";

import image from "../images/Asteroid.jpg";

export default function ListAsteroid(props) {
  return (
    <div className="card m-3" style={{maxWidth: "800px"}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={image} className="card-img" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">Card title</h3>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </p>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
