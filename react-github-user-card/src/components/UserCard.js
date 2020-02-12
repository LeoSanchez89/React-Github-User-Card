import React from "react";
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

const UserCard = props => {
	return (
		<StyledDiv>
			<StyledCard body outline color="info" >
				<CardImg src={props.user.avatar_url} alt="User" />
				<CardBody>
					<CardTitle>
						<h2>{props.user.login}</h2>
                    </CardTitle>
                    <hr/>
					<CardSubtitle>
						<p>{props.user.name}</p>
					</CardSubtitle>
					<CardText>
						<p>{props.user.location}</p>
						<p>{props.user.bio}</p>
					</CardText>
					<a href={props.user.html_url} target="_blank">
						<Button color ="info">View Profile</Button>
					</a>
				</CardBody>
			</StyledCard>
		</StyledDiv>
	);
};

export default UserCard;

const StyledDiv = styled.div`
    width:35%;
    margin-bottom:3%;
    
`;

const StyledCard = styled(Card)`
	background-color: rgb(0, 204, 255);
`;
