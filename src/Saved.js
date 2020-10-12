import React from "react";
import SavedAsteroidCard from "./components/SavedAsteroidCard";
import "./Saved.css";

export default function Saved() {
  return (
    <div className="saved">
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
