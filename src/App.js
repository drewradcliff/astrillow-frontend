import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./compnents/Menu";
import Saved from "./Saved";
import Search from "./compnents/Search";

function App() {
  return (
    <div>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route path="/saved" component={Saved} />
      <Route path="/search" component={Search} />
    </div>
  );
}

export default App;
