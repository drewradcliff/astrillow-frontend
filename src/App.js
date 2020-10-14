import React, { useState } from "react";
import { Menu, FourOhFour, AsteroidPage } from "./components";
import { Route, Switch } from "react-router";
import Home from "./Home";
import Saved from "./Saved";
import Search from "./Search";
import Signup from "./Signup";
import Login from "./Login";
import { useHistory } from "react-router-dom";


function App(props) {
  const history = useHistory();
  const [user, setUser] = useState(null);
  React.useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  });

  const [asteroidDetail, setAsteroidDetail] = useState([]);
  const [status, setStatus] = useState("not logged in");
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
        if (json.user) {
          console.log("HIT");
          handleSuccessfulAuth(json.user);
        }
        console.log(json);
        localStorage.setItem("token", json.token);
        localStorage.setItem("user_id", json.user.id)
        setLoggedIn(true);
        setStatus("logged in");
      })
      .catch((error) => {
        console.log("error", error);
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
    localStorage.removeItem("user");
    setUser(null);
    setLoggedIn(false);
    setStatus("not logged in");
  }

  function handleSuccessfulAuth(data) {
    setUser(data);
    setStatus("logged in");
    history.push("/");
  }

  return (
    <>
      <Menu loggedIn={loggedIn} handleLogout={handleLogout} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} status={status} user={user} />}
        ></Route>
        <Route path="/saved">
          <Saved />
        </Route>
        <Route
          path="/search"
          render={(props) => (
            <Search
              {...props}
              setAsteroidDetail={setAsteroidDetail}
              user={user}
            />
          )}
        ></Route>
        <Route
          path="/signup"
          render={(props) => (
            <Signup {...props} handleSignup={handleSignup} user={user} />
          )}
        ></Route>
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} handleLogin={handleLogin} user={user} />
          )}
        ></Route>
        <Route
          path="/asteroid-detail"
          render={(props) => (
            <AsteroidPage
              {...props}
              asteroidDetail={asteroidDetail}
              user={user}
            />
          )}
        ></Route>
        <Route
          path="*"
          render={(props) => <FourOhFour {...props} user={user} />}
        ></Route>
      </Switch>
    </>
  );
}

export default App;
