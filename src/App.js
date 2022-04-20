import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Dashboard, Home } from "./containers";

function App() {
	return (
		<div className="w-full h-screen flex flex-col overflow-hidden">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/admin/" element={<Dashboard />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
