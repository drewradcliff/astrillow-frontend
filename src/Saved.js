import React from "react";
import SavedAsteroidCard from "./components/SavedAsteroidCard";
import "./Saved.css";

export default function Home() {
  return (
    <div>
      <h1 className="title">Saved Asteroids</h1>
      <div className="cards">
        <SavedAsteroidCard className="card" />
        <SavedAsteroidCard className="card" />
        <SavedAsteroidCard className="card" />
        <SavedAsteroidCard className="card" />
        <SavedAsteroidCard className="card" />
        <SavedAsteroidCard className="card" />
      </div>
    </div>
  );
}
