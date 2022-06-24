import React from "react";
import classes from "./Feeds.module.css";
import Avatar from "../Layout/Avatar";
import Card from "../Layout/Card";

/* ------------------------ */
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
/* ------------------------ */

const Feeds = () => {
	return (
		<div className={classes.feeds}>
			<Card>
				<div className={classes["feed-header"]}>
					<Avatar></Avatar>
					<div className={classes["feed-header__info"]}>
						<span className={classes["name"]}>Suparva Dahal</span>
						<span className={classes.designation}>Ticktoker | Entertainer</span>
						<span className={classes.timeStamp}>2 days ago 🌎</span>
					</div>
				</div>
				<div className={classes["feed-body"]}>
					<div className={classes["feed-body__des"]}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
						vitae tempora iure nobis hic expedita debitis distinctio nulla, eos
						quidem tenetur esse nostrum adipisci quasi fuga nisi? Dolorum, ipsum
						numquam?
					</div>
					{true ? (
						<img
							src="https://www.bing.com/th?id=OIP.l4xE2pyRAzIAhrcmz7eLpQHaDs&w=350&h=174&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
							className={classes["feed-body__image"]}
							alt="img"
						></img>
					) : (
						""
					)}
					<div className={classes["feed-body__reactionsNumber"]}>
						<div className={classes.reaction}>45 Likes</div>
						<div className={classes.commentsandshare}>
							888 comments * 12 Shares
						</div>
					</div>
					<div className={classes["feed-body__reactions"]}>
						<div>
							<ThumbUpIcon />
							<span>Like</span>
						</div>
						<div>
							<CommentIcon />
							<span>Comment</span>
						</div>
						<div>
							<ShareIcon />
							<span>Share</span>
						</div>
						<div>
							<SendIcon />
							<span>Send</span>
						</div>
					</div>
				</div>
			</Card>
			<Card>
				<div className={classes["feed-header"]}>
					<Avatar></Avatar>
					<div className={classes["feed-header__info"]}>
						<span className={classes["name"]}>Suparva Dahal</span>
						<span className={classes.designation}>Ticktoker | Entertainer</span>
						<span className={classes.timeStamp}>2 days ago 🌎</span>
					</div>
				</div>
				<div className={classes["feed-body"]}>
					<div className={classes["feed-body__des"]}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
						vitae tempora iure nobis hic expedita debitis distinctio nulla, eos
						quidem tenetur esse nostrum adipisci quasi fuga nisi? Dolorum, ipsum
						numquam?
					</div>
					{true ? (
						<div className={classes["feed-body__image"]}>This is image</div>
					) : (
						""
					)}
				</div>
			</Card>
		</div>
	);
};

export default Feeds;
