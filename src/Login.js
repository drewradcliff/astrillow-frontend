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

	return (
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
	);
}
