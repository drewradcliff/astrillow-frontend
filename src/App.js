import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./components/Menu";
import Saved from "./Saved";
import Search from "./components/Search";
import Signup from "./Signup";
import Login from "./Login";

function App() {
	return (
		<div>
			<Menu />
			<Route exact path="/" component={Home} />
			<Route path="/saved" component={Saved} />
			<Route path="/search" component={Search} />
			<Route path="/signup" component={Signup} />
			<Route path="/login" component={Login} />
			{/* <Route path="/logout" component={Logout} /> */}
		</div>
	);
}

export default App;
