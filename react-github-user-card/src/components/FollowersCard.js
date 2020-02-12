import React from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

class FollowersCard extends React.Component {
	state = {
		followerinfo: []
	};

	componentDidMount() {
		axios
			.get(`${this.props.follower.url}`)
			.then(res => {
				console.log("from followers card", res.data);
				this.setState({
					followerinfo: res.data
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<a href={this.state.followerinfo.html_url} target="_blank">
				<div>
					<img src={this.state.followerinfo.avatar_url} alt="User" />
					<h3>{this.state.followerinfo.login}</h3>
					<p>{this.state.followerinfo.name}</p>
					<p>{this.state.followerinfo.location}</p>
					<p>{this.state.followerinfo.bio}</p>
				</div>
			</a>
		);
	}
}

export default FollowersCard;
