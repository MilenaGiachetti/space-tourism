import { Route, Routes } from "react-router-dom";
import Header from "@components/Header";
import Crew from "@pages/Crew";
import Destination from "@pages/Destination";
import Home from "@pages/Home";
import Technology from "@pages/Technology";

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/crew">
						<Route index element={<Crew />} />
						<Route path=":id" element={<Crew />} />
					</Route>
					<Route path="/destination">
						<Route index element={<Destination />} />
						<Route path=":id" element={<Destination />} />
					</Route>
					<Route path="/technology">
						<Route index element={<Technology />} />
						<Route path=":id" element={<Technology />} />
					</Route>
				</Routes>
			</main>
		</>
	);
}

export default App;
