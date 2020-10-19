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
          <Button className="button" variant="light" href="/search">
            Explore Asteroids
          </Button>
          <br />
          <Button className="button" variant="light" href="/test500">
            Test Server 500 Error
          </Button>
        </p>
      </div>
    </div>
  );
}
