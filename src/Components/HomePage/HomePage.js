import classes from "./HomePage.module.css";

/* ---------------------------- */
import PhotoIcon from "@mui/icons-material/Photo";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NewspaperIcon from "@mui/icons-material/Newspaper";

/* -------------------------- */

import Card from "../Layout/Card";
import Avatar from "../Layout/Avatar";
import Profile from "./Profile";
import Feeds from "./Feeds";
import Nav from "./Nav";
const HomePage = (props) => {
	return (
		<div className={classes.HomePage}>
			<>
				<section>
					<Nav />
				</section>
				<section>
					<div className={classes["HomePage-body"]}>
						<div className={classes["HomePage-body__profile"]}>
							<Profile />e
						</div>
						<div className={classes["HomePage-body__feed"]}>
							<Card>
								<div className={classes["feed-post"]}>
									<Avatar class="feed-post__user"></Avatar>
									<button
										className={classes["feed-post__inputBox"]}
										onClick={props.show}
									>
										<span>Start a post</span>
									</button>
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
							<Feeds />
						</div>
						<div className={classes["HomePage-body__recomend"]}>
							<h1>This is recommends</h1>
						</div>
					</div>
				</section>
			</>
		</div>
	);
};

export default HomePage;
