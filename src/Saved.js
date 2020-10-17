import React, { useState, useEffect } from "react";
import { SavedAsteroidCard } from "./components";
import { useHistory } from "react-router-dom";

import "./Saved.css";

export default function Saved(props) {
  let history = useHistory();
  const [savedAsteroids, setSavedAsteroids] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:8000/api/savedasteroid/?saved_by=${
        JSON.parse(localStorage.getItem("user")).id
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401) {
          history.push("/login");
        }
        return res.json();
      })
      .then((data) => setSavedAsteroids(data))
      .catch((error) => console.error(error));
  }, [history]);

  return (
    <div className="saved">
      <h1 className="asteroid-title">Saved Asteroids</h1>
      <div className="asteroid-cards">
        {savedAsteroids &&
          savedAsteroids.map((asteroid) => (
            <SavedAsteroidCard
              key={asteroid.id}
              asteroid={asteroid}
              className="asteroid-card"
              setAsteroidDetail={props.setAsteroidDetail}
            />
          ))}
      </div>
    </div>
  );
}
