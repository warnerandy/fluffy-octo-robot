import React, {useState} from "react";

function Login (props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	function showError() {
	}
	function login(e) {
		e.preventDefault();
		console.warn("DO YOUR LOGIN HERE!");
	}

	return (
		<div>
			<h3>Login</h3>
			<form className="body">
				{showError()}
				<div className="row">
				<label>Username</label>
				<input type="text" onChange = {(event) => setUsername(event.target.value)} />
				</div>
				<div className="row">
				<label>Password</label>
				<input type="password" onChange = {(event) => setPassword(event.target.value)} />
				</div>
				<div className="pull-right row">
					<button onClick={login}> Login</button>
				</div>
			</form>
		</div>
	);
}

export default Login