import React from "react";
import Button from "react-bootstrap/Button";

import "./Home.css";

export default function Home() {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Go Far</h1>
        <p>You're path to untold riches.</p>
        <p>
          <Button variant="light">Explore Asteroids</Button>
        </p>
      </div>
    </div>
  );
}
