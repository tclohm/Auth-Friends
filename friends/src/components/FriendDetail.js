import React, { useState, useEffect } from "react";
import { authAxios } from "../utils/authAxios";
import "./css/FriendDetail.css";

const FriendDetail = props => {

	const [member, setMember] = useState({})

	useEffect(() => {
		getFriend()
	}, [member, getFriend])

	function getFriend() {
		authAxios().get(`/friends/${props.match.params.id}`)
				 .then(res => {
				 	console.log(res)
				 	setMember(res.data)
				 })
				 .catch(err => {
				 	console.log(err)
				 })
	}

	return (
		<div>
		<h1 className="detail-title">{member.name}</h1>
		<h1 className="detail-title">{member.email}</h1>
		</div>
	);
};

export default FriendDetail;