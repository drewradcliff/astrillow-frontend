import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { SpaceMap, SearchFilter, ListAsteroid } from "./components";

import "./Search.css";

export default function Search(props) {
  const [asteroidList, setAsteroidList] = useState([]);
  const [submitValue, setSubmitValue] = useState(false);

  // // Dummy data
  // const dummyData = [
  //   {
  //     name: "asteroid1",
  //     parameters: {
  //       // These parameters define orbit shape.
  //       a: 1.324870564730606,
  //       e: 2.557785995665682e-1,
  //       i: 1.07755072280486,

  //       // These parameters define the orientation of the orbit.
  //       om: 3.170946964325638e2,
  //       w: 1.774865822248395e2,
  //       ma: 1.764302192487955e2,

  //       // Where the object is in its orbit.
  //       epoch: 2458426.5,
  //     },
  //   },
  // ];

  return (
    <div className="search">
      <div className="left-components">
        <SearchFilter
          setAsteroidList={setAsteroidList}
          setSubmitValue={setSubmitValue}
        />
        {asteroidList.map((post) => (
          <ListAsteroid
            key={post.id}
            post={post}
            setSubmitValue={setSubmitValue}
            submitValue={submitValue}
            setAsteroidDetail={props.setAsteroidDetail}
          />
        ))}
      </div>
      <div className="spacekit">
        {/* <SpaceMap asteroidList={dummyData} /> */}
      </div>
    </div>
  );
}
