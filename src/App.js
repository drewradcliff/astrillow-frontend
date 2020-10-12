import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Home from "./Home";
import { Menu } from "./components";
import Saved from "./Saved";
import Search from "./Search";
import Signup from "./Signup";
import Login from "./Login";
import FourOhFour from "./components/404";

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  function handleLogin(e, data) {
    e.preventDefault();
    fetch("http://localhost:8000/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        setLoggedIn(true);
        setUser(json.user);
      });
  }

  function handleSignup(e, data) {
    console.log(data);
    e.preventDefault();
    fetch("http://localhost:8000/testusers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        localStorage.setItem("token", json.token);
        setLoggedIn(true);
        setUser(json.user);
      });
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  return (
    <div>
      <Menu loggedIn={loggedIn} handleLogout={handleLogout} />
      <Route exact path="/">
        {loggedIn ? <Home /> : <Redirect to="/login" />}
      </Route>
      <Route path="/saved">
        <Saved />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/signup">
        <Signup handleSignup={handleSignup} />
      </Route>
      <Route path="/login">
        <Login handleLogin={handleLogin} />
      </Route>
      <Route path="*">
        <FourOhFour />
      </Route>
    </div>
  );
}

export default App;
