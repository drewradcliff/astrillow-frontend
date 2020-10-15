import React, { useState } from "react";
import { SpaceMap, SearchFilter, ListAsteroid } from "./components";

import "./Search.css";

export default function Search(props) {
  const [asteroidList, setAsteroidList] = useState([]);
  const [submitValue, setSubmitValue] = useState(false);

  return (
    <div className="search">
      <div className="left-components">
        <SearchFilter
          setAsteroidList={setAsteroidList}
          setSubmitValue={setSubmitValue}
        />
        {asteroidList.map((asteroid) => (
          <ListAsteroid
            key={asteroid.id}
            asteroid={asteroid}
            setSubmitValue={setSubmitValue}
            submitValue={submitValue}
            setAsteroidDetail={props.setAsteroidDetail}
          />
        ))}
      </div>
      <div className="spacekit">
        <SpaceMap asteroidList={asteroidList} />
      </div>
    </div>
  );
}
