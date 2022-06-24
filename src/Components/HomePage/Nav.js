import React from "react";
import classes from "./Nav.module.css";
import CottageIcon from "@mui/icons-material/Cottage";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ApprovalIcon from "@mui/icons-material/Approval";
import SearchIcon from "@mui/icons-material/Search";
import LinkedIn from "../../Assets/linkedin.svg";
const Nav = () => {
	return (
		<nav className={classes["nav"]}>
			<div>
				<div className={classes["nav-logo"]}>
					<img src={LinkedIn} alt="" srcset="" />
				</div>
				<div className={classes["nav-search"]}>
					<SearchIcon className={classes["nav-searchIcon"]} />
					<input type="text" placeholder="Search Profiles" />
				</div>
			</div>
			<div className={classes["nav-iconsContainer"]}>
				<div className={classes.active}>
					<CottageIcon />
					<span>Home</span>
				</div>
				<div>
					<PeopleIcon />
					<span>Network</span>
				</div>
				<div>
					<WorkIcon />
					<span>Jobs</span>
				</div>
				<div>
					<ChatIcon />
					<span>Messenging</span>
				</div>
				<div>
					<NotificationsIcon />
					<span>Notifications</span>
				</div>
				<div>
					<ApprovalIcon />
					<span>Post a job</span>
				</div>

				{/*
        <PeopleAltIcon></PeopleAltIcon> */}
			</div>
		</nav>
	);
};

export default Nav;
