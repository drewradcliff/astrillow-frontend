import React from "react";
import image from "/Users/bedo/Documents/projects/q4/astrillow-frontend/src/images/133303main_image_feature_406_ys_full.jpg";

export default function Search() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}
