import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Product from "./pages/Product/Product";
import Layout from "./pages/Layout/Layout";
import NoPage from "./pages/NoPage/NoPage";
import "./App.css";
import { CartProvider } from "./store/cartContext/cartContext";
import TrackingOrder from "./pages/Tracking/TrackingOrder";
import LoginPage from "./pages/Login/LoginPage";
import ContactPage from "./pages/Contact/ContactPage";
import SizingChart from "./pages/SizingChart/SizingChart";
import Payment from "./pages/Payment/Payment";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="tracking" element={<TrackingOrder />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="sizing chart" element={<SizingChart />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
