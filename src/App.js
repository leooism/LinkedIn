import { useState } from "react";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { InputModal } from "./Components/HomePage/InputModal";
function App() {
	const [showModal, setShowModal] = useState(false);
	const onShow = () => {
		setShowModal(true);
	};
	const onHide = () => {
		console.log("first");
		setShowModal(false);
	};
	return (
		<div className="App">
			{showModal && <InputModal hide={onHide} />}

			<HomePage show={onShow} />
		</div>
	);
}

export default App;
