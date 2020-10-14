import React from "react";

function FourOhFour(props) {
  return (
    <div style={{ paddingTop: "56px" }} className="col-md-12">
      <div style={{ padding: 40 + "px", textAlign: "center" }}>
        <h1>Oops!</h1>
        <h2>404 Not Found</h2>
        <div>Sorry, an error has occured, Requested page not found!</div>
        <div style={{ marginTop: 15 + "px", marginBottom: 15 + "px" }}>
          <a href="/" className="btn btn-primary btn-lg">
            Take Me Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default FourOhFour;
