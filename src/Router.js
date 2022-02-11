import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={} />
					<Route path="" element={} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
