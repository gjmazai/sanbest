import React from "react";
import "./assets/scss/App.scss";
import Preview from "./components/Preview";
import Main from "./components/Main";

function App() {
	return (
		<div className="App">
			<Preview />
			<Main />
			<header className="App-header"></header>
		</div>
	);
}

export default App;

