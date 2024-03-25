import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Product from "./pages/Product/Product";
import Layout from "./pages/Layout/Layout";
import NoPage from "./pages/NoPage/NoPage";
import "./App.css";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./store/cartContext/cartContext";
import TrackingOrder from "./pages/Tracking/TrackingOrder";
import LoginPage from "./pages/Login/LoginPage";
import ContactPage from "./pages/Contact/ContactPage";
import SizingChart from "./pages/SizingChart/SizingChart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="cart" element={<Cart />} />
            <Route path="tracking" element={<TrackingOrder />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="sizing chart" element={<SizingChart />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
