import React from "react";
import { Link } from "react-router-dom";

import "./css/Friends.css";


const FriendCard = props => {

	const { friend } = props;
	//const friendID = friends.find(person => `${person.id}` === props.match.parms.id)
	
	return (
		<div>
			<Link to={`/friends/${friend.id}`} className="card">
				<div className="left">
				<h4>{friend.name}</h4>
				<h6>{friend.email}</h6>
				</div>
				<h1 className="right">{friend.age}</h1>
			</Link>
		</div>
	);
};

export default FriendCard;