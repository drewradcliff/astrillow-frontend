import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Menu, FourOhFour, AsteroidPage } from "./components";
import Home from "./Home";
import Saved from "./Saved";
import Search from "./Search";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  const [asteroidDetail, setAsteroidDetail] = useState([]);
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
        localStorage.setItem("user_id", json.user.id)
        setLoggedIn(true);
        setUser(json.user);
      });
  }

  function handleSignup(e, data) {
    e.preventDefault();
    fetch("http://localhost:8000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        localStorage.setItem("user_id", json.user.id)
        setLoggedIn(true);
        setUser(json.user);
      });
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setLoggedIn(false);
  }

  return (
    <>
      <Menu loggedIn={loggedIn} handleLogout={handleLogout} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="/search">
            <Search setAsteroidDetail={setAsteroidDetail} />
          </Route>
          <Route path="/signup">
            <Signup handleSignup={handleSignup} />
          </Route>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/asteroid-detail">
            <AsteroidPage asteroidDetail={asteroidDetail} />
          </Route>
          <Route path="*">
            <FourOhFour />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
