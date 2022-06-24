import React from "react";
import classes from "./Profile.module.css";
import Card from "../Layout/Card";
const Profile = () => {
	return (
		<Card>
			<div className={classes["profile-header"]}>
				<div className={classes["profile-background"]}></div>
				<div className={classes["profile-img"]}></div>
				<div className={classes["profile-intro"]}>
					<div>
						<b>Bidhan Bhandari</b>
					</div>
					<div> React Developer</div>
				</div>
			</div>
			<div className={classes["profile-connections"]}>
				<div>
					<span>Connections</span>
					<span className={classes["profile-numberConnection"]}>5</span>
				</div>
				<b>Connect with alumni</b>
			</div>
		</Card>
	);
};

export default Profile;
