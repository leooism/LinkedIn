import React from "react";
import classes from "./Avatar.module.css";
const Avatar = (props) => {
	return (
		<div className={`${classes.Avatar} ${props.class}`}>{props.children}</div>
	);
};

export default Avatar;
