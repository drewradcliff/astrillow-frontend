import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"

export default function Signup({ handleSignup }) {
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    if (e.target.name === "display_name") {
      setDisplayName(e.target.value);
    } else if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  return (
    <div style={{ paddingTop: "70px", maxWidth: "30rem", margin: "0 auto" }}>
      <Form
        onSubmit={(e) => {
          handleSignup(e, { username, password, display_name: displayName });
          setDisplayName("");
          setUsername("");
          setPassword("");
        }}
      >
        <Form.Group>
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Display Name"
            name="display_name"
            value={displayName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {/* <form
        onSubmit={(e) => {
          handleSignup(e, { username, password, display_name: displayName });
          setDisplayName("");
          setUsername("");
          setPassword("");
        }}
      >
        <h4>Signup</h4>
        <label htmlFor="username">Username</label>
        <input
        type="email"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          name="display_name"
          value={displayName}
          onChange={handleChange}
        />
        <input type="submit" />
      </form> */}
    </div>
  );
}
