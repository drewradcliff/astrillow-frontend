import React, { useState, useEffect } from "react";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem("token") ? true : false
	);

	function handleChange(e) {
		if (e.target.name === "username") {
			setUsername(e.target.value);
		} else {
			setPassword(e.target.value);
		}
	}

	// useEffect(() => {
	//   if (loggedIn) {
	//     fetch("http://localhost:8000/api/user/", {
	//       headers: {
	//         Authorization: `JWT ${localStorage.getItem('token')}`
	//       }
	//     })
	//       .then(res => res.json())
	//       .then(json => {
	//         setUsername(json.username)
	//       })
	//   }
	// });

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
				setLoggedIn(true);
			});
	}

	return (
		<form onSubmit={(e) => handleLogin(e, { username, password })}>
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
	);
}
