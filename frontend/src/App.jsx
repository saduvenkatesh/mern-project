import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="app-container">
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/create" element={<CreatePage />} />
			</Routes>

			<style>{`
				.app-container {
					min-height: 100vh;
					background-color: #f5f5f5; /* Light gray background for light mode */
					color: #000;               /* Default text color for light mode */
					padding: 0;
					margin: 0;
				}

				@media (prefers-color-scheme: dark) {
					.app-container {
						background-color: #1a202c; /* Dark background for dark mode */
						color: #fff;               /* White text color for dark mode */
					}
				}
			`}</style>
		</div>
	);
}

export default App;
