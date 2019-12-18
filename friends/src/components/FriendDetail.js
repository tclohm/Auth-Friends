import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { authAxios } from "../utils/authAxios";

const FriendDetail = props => {

	const { id } = useParams();

	return (
		<h1>Now showing friend {id}</h1>
	);
};

export default FriendDetail;