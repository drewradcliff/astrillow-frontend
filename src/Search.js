import React, { useState } from "react";
import { SpaceMap, SearchFilter, ListAsteroid } from "./components";

import "./Search.css";

export default function Search() {
  const [asteroidList, setAsteroidList] = useState([]);

  return (
    <div className="search">
      <div className="left-components">
        <SearchFilter setAsteroidList={setAsteroidList} />
        {asteroidList.map((asteroid) => (
          <ListAsteroid />
        ))}
      </div>
      <div className="spacekit">
        <SpaceMap asteroidList={asteroidList} />
      </div>
    </div>
  );
}
