import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";

class App extends React.Component {
	state = {
		user: []
	};

	componentDidMount() {
		axios
			.get("https://api.github.com/users/LeoSanchez89")
			.then(response => {
				// console.log(response.data);
				this.setState({
					user: response.data
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="App">
				<header>
					<h1>Github User Card</h1>
				</header>
				<UserCard user={this.state.user} />
			</div>
		);
	}
}

export default App;
