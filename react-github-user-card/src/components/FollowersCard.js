import React from "react";
import axios from "axios";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";

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
			<StyledDiv>
				<StyledCard body outline color="info">
					<CardImg src={this.state.followerinfo.avatar_url} alt="User" />
					<CardBody>
						<CardTitle>
							<h2>{this.state.followerinfo.login}</h2>
                        </CardTitle>
                        <hr/>
						<CardSubtitle>
							<h3>{this.state.followerinfo.name}</h3>
						</CardSubtitle>
						<CardText>
							<p><FaMapMarkerAlt/>{this.state.followerinfo.location}</p>
							<p>{this.state.followerinfo.bio}</p>
						</CardText>
						<a href={this.state.followerinfo.html_url} target="_blank">
							<Button color ="info">View Profile</Button>
						</a>
					</CardBody>
				</StyledCard>
			</StyledDiv>
		);
	}
}

export default FollowersCard;

const StyledDiv = styled.div`
    width: 35%;
    margin-bottom: 3%;
`;
const StyledCard = styled(Card)`
	background-color: rgb(0, 204, 255);
`;
