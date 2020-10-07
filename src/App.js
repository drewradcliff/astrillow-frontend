import React, { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./components/Menu";
import Saved from "./Saved";
import Search from "./components/Search";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [setUser] = useState(null);
  const [loggedIn] = useState(localStorage.getItem("token") ? true : false);
  function handleLogin(e, data) {
    console.log(data);
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
				setUser(json.user)
			});
  }

  return (
    <div>
      <Menu />
      <Route exact path="/">
        {loggedIn ? <Home /> : <Login handleLogin={handleLogin} />}
      </Route>
      <Route path="/saved">
        <Saved />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login handleLogin={handleLogin} />
      </Route>
    </div>
  );
}

export default App;
