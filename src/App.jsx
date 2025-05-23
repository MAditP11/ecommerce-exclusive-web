import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Whislist from "./pages/whislist";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Account from "./pages/account";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";
import DetailProduct from "./pages/detailproduct";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/whislist" element={<Whislist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/detail-product" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
}
