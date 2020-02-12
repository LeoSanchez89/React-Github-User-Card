import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";
import FollowersCard from "./components/FollowersCard";

class App extends React.Component {
	state = {
		user: [],
		followers: []
	};

	componentDidMount() {
		axios
			.all([
				axios.get("https://api.github.com/users/LeoSanchez89"),
				axios.get("https://api.github.com/users/LeoSanchez89/followers")
			])
			.then(response => {
				// console.log(response[1].data);
				this.setState({
					user: response[0].data,
					followers: response[1].data
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div class="maincont">
				<header>
					<h1>Github User Card</h1>
				</header>
				<section class ="cardcont">
					<UserCard user={this.state.user} />
					{this.state.followers.map(follower => {
						return <FollowersCard follower={follower} key={follower.id} />;
					})}
				</section>
			</div>
		);
	}
}

export default App;
