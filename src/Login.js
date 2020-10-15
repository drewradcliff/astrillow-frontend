import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  return (
    <div style={{ paddingTop: "70px", maxWidth: "30rem", margin: "0 auto"}}>
      <Form
        onSubmit={(e) => {
          props.handleLogin(e, { username, password });
          setUsername("");
          setPassword("");
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="username" value={username} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <a href="/signup">Signup</a>
    </div>
  );
}
