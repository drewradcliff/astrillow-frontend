import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import { useHistory, Redirect } from "react-router-dom";
import { Menu, FourOhFour, AsteroidPage } from "./components";
import Home from "./Home";
import Saved from "./Saved";
import Search from "./Search";
import ServerError from "./components/ServerError";
import Signup from "./Signup";
import Login from "./Login";
import SpaceAct from "./SpaceAct";

function App() {
  const history = useHistory();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  });

  const [asteroidDetail, setAsteroidDetail] = useState([]);
  const [formError, setFormError] = useState(null);
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
        console.log(json);
        if (json.non_field_errors) {
          setFormError(json.non_field_errors);
        }
        if (json.user) {
          handleSuccessfulAuth(json.user);
          localStorage.setItem("token", json.token);
          setLoggedIn(true);
        }
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
        if (json.username) {
          setFormError(json.username);
        }
        if (json.username && json.token) {
          handleSuccessfulAuth(json);
          localStorage.setItem("token", json.token);
          setLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setLoggedIn(false);
  }

  function handleSuccessfulAuth(data) {
    setUser(data);
    history.push("/");
  }

  return (
    <>
      <Menu loggedIn={loggedIn} handleLogout={handleLogout} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} user={user} />}
        ></Route>
        <Route
          path="/saved"
          render={(props) =>
            loggedIn === true ? (
              <Saved
                {...props}
                user={user}
                setAsteroidDetail={setAsteroidDetail}
              />
            ) : (
              <Redirect to={{ pathname: "/login", props: { handleLogin } }} />
            )
          }
        ></Route>
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
            <Signup
              {...props}
              handleSignup={handleSignup}
              user={user}
              formError={formError}
            />
          )}
        ></Route>
        <Route
          path="/test500"
          render={(props) => (
            <ServerError
              {...props}
              handleSignup={handleSignup}
              user={user}
              formError={formError}
            />
          )}
        ></Route>
        <Route
          path="/login"
          render={(props) => (
            <Login
              {...props}
              handleLogin={handleLogin}
              user={user}
              formError={formError}
            />
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
        <Route path="/spaceact" render={(props) => <SpaceAct />}></Route>
        <Route
          path="*"
          render={(props) => <FourOhFour {...props} user={user} />}
        ></Route>
      </Switch>
    </>
  );
}

export default App;
