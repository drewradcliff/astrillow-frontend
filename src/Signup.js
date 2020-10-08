import React, { useState } from "react";

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
    <form onSubmit={(e) => handleSignup(e, { username, password, display_name: displayName })}>
      <h4>Signup</h4>
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
      <label htmlFor="displayName">Display Name</label>
      <input
        type="text"
        name="display_name"
        value={displayName}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
}
