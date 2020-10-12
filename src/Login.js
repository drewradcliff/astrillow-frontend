import React, { useState } from "react";

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
    <div style={{ paddingTop: "56px" }}>
      <form onSubmit={(e) => props.handleLogin(e, { username, password })}>
        <h4>Log In</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
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
        <input type="submit" />
      </form>
      <a href="/signup">Signup</a>
    </div>
  );
}
