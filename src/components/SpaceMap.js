import React, { useEffect } from "react";

export default function SpaceMap(props) {
  useEffect(() => {
    const div = document.getElementById("main-container");
    if (div.firstChild) {
      while (div.firstChild) {
        div.removeChild(div.firstChild);
      }
    }

    // Update the document title using the browser API
    const viz = new window.Spacekit.Simulation(
      document.getElementById("main-container"),
      {
        basePath: "https://typpo.github.io/spacekit/src",
      }
    );

    // viz.createStars();

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
      viz.createObject(asteroid.full_name, {
        // labelText: asteroid.full_name,
        ephem: new window.Spacekit.Ephem(
          {
            a: asteroid.a,
            e: asteroid.e,
            i: asteroid.i,
            om: asteroid.om,
            w: asteroid.w,
            ma: asteroid.ma,
            epoch: asteroid.epoch,
          },
          "deg"
        ),
      });
    });
  }, [props.asteroidList]);

  return (
    <div style={{ height: "100%", width: "100%" }} id="main-container"></div>
  );
}
