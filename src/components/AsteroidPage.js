import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./AsteroidPage.css";
import { SpaceMap } from ".";

const AsteroidPage = (props) => {
  const [compositions, setCompositions] = useState({});
  useEffect(() => {
    fetch(`http://www.asterank.com/api/compositions`)
      .then((res) => res.json())
      .then((data) => setCompositions(data[props.asteroidDetail.spec]));
  }, []);

  return (
    <Card className="asteroid-page" style={{ width: "28rem" }} border="light">
      <Card.Body className="body">
        <div className="container">
          <Card.Title style={{ flexGrow: 1 }}>
            {props.asteroidDetail.full_name}
          </Card.Title>
          <div id="icon" style={{ flexGrow: 8 }}>
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-bookmark-heart"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
              />
              <path
                fillRule="evenodd"
                d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
              />
            </svg>
          </div>
        </div>
      </Card.Body>
      {/* <Card.Img variant="top" src={image} style={{ height: 250 + "px", width: "250px", margin: "0 auto" }} /> */}
      <div style={{ width: "28rem", height: "28rem" }}>
        <SpaceMap asteroidList={[props.asteroidDetail]} />
      </div>
      <p className="text">Producer: {props.asteroidDetail.producer}</p>
      <h5>Composition</h5>
      <ul>
        {Object.keys(compositions).map(function(key, index) {
          return <li>{key}</li>
        })}
      </ul>
      <div className="card-footer text-muted">
        First Observed: {props.asteroidDetail.first_obs}
      </div>
    </Card>
  );
};

export default AsteroidPage;
