import React, { useEffect } from "react";

export default function SpaceMap(props) {
  useEffect(() => {
    //
    // Update the document title using the browser API
    const viz = new window.Spacekit.Simulation(
      document.getElementById("main-container"),
      {
        basePath: "https://typpo.github.io/spacekit/src",
      }
    );

    // Create a background using Yale Bright Star Catalog data.
    viz.createStars();

    // Create our first object - the sun - using a preset space object.
    viz.createObject("sun", window.Spacekit.SpaceObjectPresets.SUN);

    // Then add some planets
    viz.createObject("mercury", window.Spacekit.SpaceObjectPresets.MERCURY);
    viz.createObject("venus", window.Spacekit.SpaceObjectPresets.VENUS);
    viz.createObject("earth", window.Spacekit.SpaceObjectPresets.EARTH);
    viz.createObject("mars", window.Spacekit.SpaceObjectPresets.MARS);
    viz.createObject("jupiter", window.Spacekit.SpaceObjectPresets.JUPITER);
    viz.createObject("saturn", window.Spacekit.SpaceObjectPresets.SATURN);
    viz.createObject("uranus", window.Spacekit.SpaceObjectPresets.URANUS);
    viz.createObject("neptune", window.Spacekit.SpaceObjectPresets.NEPTUNE);

    props.asteroidList.forEach((asteroid) => {
      const obj = viz.createObject(asteroid.name, {
        labelText: "asteroid",
        ephem: new window.Spacekit.Ephem(asteroid.parameters, "deg"),
      });
    });
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }} id="main-container"></div>
  );
}
