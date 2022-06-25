import React from "react";
import ReactDOM from "react-dom";
import classes from "./InputModal.module.css";
import Avatar from "../Layout/Avatar";
import PhotoIcon from "@mui/icons-material/Photo";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CloseIcon from "@mui/icons-material/Close";
const BackdropOverlay = () => {
	return <div className={classes.backdrop}></div>;
};
const Modal = (props) => {
	// console.log(`yoo => ${props.onHide()}`);
	return (
		<div className={classes.InputModal}>
			<div className={classes.inputContainer}>
				<div className={classes["inputContainer-header"]}>
					<div>Create a Post</div>
					<button className={classes.close} onClick={props.onHide}>
						<CloseIcon />
					</button>
				</div>
				<div className={classes["inputContainer-body"]}>
					<div className={classes["inputContainer-body__header"]}>
						<Avatar />
						<div className={classes["inputContainer-body__header-info"]}>
							<div className={classes["username"]}>Bidhan Bhandari</div>
							<div className={classes["options"]}>🌎Anyone🔽</div>
						</div>
					</div>
					<div className={classes["inputContainer-body__input"]}>
						<textarea
							name="input"
							id="input"
							cols="30"
							rows="10"
							placeholder="What do you want to talk about?"
						></textarea>
					</div>
				</div>
				<div className={classes["inputContainer__other"]}>
					<div data="Photo">
						<PhotoIcon />
					</div>
					<div data="Video">
						<VideoCameraBackIcon />
					</div>
					<div data="Calender">
						<CalendarMonthIcon />
					</div>
					<div data="Newspaper">
						<NewspaperIcon />
					</div>
					<div>
						<button className={classes.Submit}>Post</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export const InputModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<BackdropOverlay />,
				document.getElementById("overlay")
			)}
			{ReactDOM.createPortal(
				<Modal onHide={props.hide} />,
				document.getElementById("modal")
			)}
		</>
	);
};
