import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Product from "./pages/Product/Product";
import Layout from "./pages/Layout/Layout";
import NoPage from "./pages/NoPage/NoPage";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
			  <Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="search" element={<Search />} />
				<Route path="product/:productId" element={<Product />} />
				<Route path="*" element={<NoPage />} />
			  </Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
