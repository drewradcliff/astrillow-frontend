import React, { useEffect } from "react";
import { SpaceMap, SearchFilter } from "./components";

import "./Search.css";

export default function Search() {
  const asteroidParameters = {
    // These parameters define orbit shape.
    a: 1.324870564730606,
    e: 2.557785995665682e-1,
    i: 1.07755072280486,

    // These parameters define the orientation of the orbit.
    om: 3.170946964325638e2,
    w: 1.774865822248395e2,
    ma: 1.764302192487955e2,

    // Where the object is in its orbit.
    epoch: 2458426.5,
  };

  return (
    <div className="search">
      <div className="left-components">
        <SearchFilter />
        <div>Asteroid Search Component</div>
      </div>
      {/* <div style={{ minHeight: "500px" }} id="main-container"></div> */}
      <div className="spacekit">
        <SpaceMap
          asteroidName="asteroid"
          asteroidParameters={asteroidParameters}
        />
      </div>
    </div>
  );
}
