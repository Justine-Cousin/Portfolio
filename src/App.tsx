import "./App.css";
import About from "./components/About";
import Headers from "./components/Header/Header";
import Presentation from "./components/Presentation";

function App() {
	return (
		<>
			<div className="main-container">
				<Headers />
				<Presentation />
				<About />
			</div>
		</>
	);
}

export default App;
