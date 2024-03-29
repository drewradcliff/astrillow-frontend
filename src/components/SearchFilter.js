import React, { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export default function SearchFilter({ setAsteroidList }) {
  const [radioValue, setRadioValue] = useState("value");
  const [searchValue, setSearchValue] = useState("");

  const radios = [
    { name: "Value", value: "value" },
    { name: "Accessable", value: "accessibility" },
    { name: "Smallest", value: "smallest" },
  ];

  useEffect(() => {
    fetch(
      `https://www.asterank.com/api/rankings?sort_by=${radioValue}&limit=20`
    )
      .then((res) => res.json())
      .then((data) => setAsteroidList(data));
  }, [setAsteroidList, radioValue]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event, data) => {
    event.preventDefault();
    fetch(`https://www.asterank.com/api/autocomplete?query=${searchValue}`)
      .then((res) => res.json())
      .then((data) => setAsteroidList(data));
    setSearchValue(event.target.value);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <form
        onSubmit={(e) => handleSubmit(e, searchValue)}
        className="form-inline"
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          name="search"
          aria-label="Search"
          onChange={handleChange}
        ></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div style={{ marginTop: "1rem" }}>
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
