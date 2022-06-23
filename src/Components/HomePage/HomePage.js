import React from "react";
import classes from "./HomePage.module.css";
import CottageIcon from "@mui/icons-material/Cottage";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ApprovalIcon from "@mui/icons-material/Approval";
import SearchIcon from "@mui/icons-material/Search";
import LinkedIn from "../../Assets/linkedin.svg";
/* ---------------------------- */
import PhotoIcon from "@mui/icons-material/Photo";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NewspaperIcon from "@mui/icons-material/Newspaper";

/* -------------------------- */

import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import Card from "../Layout/Card";
import Avatar from "../Layout/Avatar";
const HomePage = () => {
	return (
		<div className={classes.HomePage}>
			<section>
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
			</section>
			<section>
				<div className={classes["HomePage-body"]}>
					<div className={classes["HomePage-body__profile"]}>
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
						</Card>
					</div>
					<div className={classes["HomePage-body__feed"]}>
						<Card>
							<div className={classes["feed-post"]}>
								<Avatar class="feed-post__user"></Avatar>
								<div className={classes["feed-post__inputBox"]}>
									<span>Start a post</span>
								</div>
							</div>
							<div className={classes["feed-post__other"]}>
								<div>
									<PhotoIcon />
									<span>Photo</span>
								</div>
								<div>
									<VideoCameraBackIcon />
									<span>Video</span>
								</div>
								<div>
									<CalendarMonthIcon />
									<span>Events</span>
								</div>
								<div>
									<NewspaperIcon />
									<span>White articles</span>
								</div>
							</div>
						</Card>
						<div className={classes.dividor}></div>
						<div className={classes.feeds}>
							<Card>
								<div className={classes["feed-header"]}>
									<Avatar></Avatar>
									<div className={classes["feed-header__info"]}>
										<span className={classes["name"]}>Suparva Dahal</span>
										<span className={classes.designation}>
											Ticktoker | Entertainer
										</span>
										<span className={classes.timeStamp}>2 days ago 🌎</span>
									</div>
								</div>
								<div className={classes["feed-body"]}>
									<div className={classes["feed-body__des"]}>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Pariatur vitae tempora iure nobis hic expedita debitis
										distinctio nulla, eos quidem tenetur esse nostrum adipisci
										quasi fuga nisi? Dolorum, ipsum numquam?
									</div>
									{true ? (
										<div className={classes["feed-body__image"]}>
											This is image
										</div>
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
										<span className={classes.designation}>
											Ticktoker | Entertainer
										</span>
										<span className={classes.timeStamp}>2 days ago 🌎</span>
									</div>
								</div>
								<div className={classes["feed-body"]}>
									<div className={classes["feed-body__des"]}>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Pariatur vitae tempora iure nobis hic expedita debitis
										distinctio nulla, eos quidem tenetur esse nostrum adipisci
										quasi fuga nisi? Dolorum, ipsum numquam?
									</div>
									{true ? (
										<div className={classes["feed-body__image"]}>
											This is image
										</div>
									) : (
										""
									)}
								</div>
							</Card>
						</div>
					</div>
					<div className={classes["HomePage-body__recomend"]}>
						<h1>This is recommends</h1>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
