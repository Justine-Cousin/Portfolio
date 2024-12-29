import "./App.css";
import About from "./components/About";
import Headers from "./components/Header";
import Presentation from "./components/presentation";

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
