import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import "./ServerError.css";
import { useHistory } from "react-router-dom";

function ServerError(props) {
  const history = useHistory();
  const [ServerError, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/test500/")
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        setError(text);
      })
      .catch((error) => {
        console.log("error", error);
      });
  });

  const handleOnClick = () => {
    history.push("/");
  };

  return (
    <div className="page-404" style={{ paddingTop: 56 + "px" }}>
      <div className="outer">
        <div className="middle">
          <div className="inner" onClick={handleOnClick}>
            <div className="inner-circle">
              <i className="fa fa-cogs"></i>
              <span>500</span>
            </div>
            <div style={{ width: 500 + "px", marginTop: 5 + "px" }}>
              {parse(ServerError)}
            </div>
            <span className="inner-status">Opps! Internal Server Error!</span>
            <span className="inner-detail">
              Unfortunately we're having trouble loading the page you are
              looking for. Please come back in a while.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerError;
