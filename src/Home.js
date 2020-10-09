import React from "react";
import image from "./images/133303main_image_feature_406_ys_full.jpg";
import "./Home.css";
import AsteroidPage from "./components/AsteroidPage";

export default function Home() {
  return (
    <div
      className="sliding-background"
      style={{
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <div className="cards">
          <AsteroidPage />
        </div>
      </div>
    </div>
  );
}
