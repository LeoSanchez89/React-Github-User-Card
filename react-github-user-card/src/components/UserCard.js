import React from "react";

const UserCard = props => {
	return (
		<div>
			<img src={props.user.avatar_url} alt="User" />
			<h3>{props.user.login}</h3>
			<p>{props.user.name}</p>
			<p>{props.user.location}</p>
            <p>{props.user.bio}</p>
            
		</div>
	);
};

export default UserCard;
