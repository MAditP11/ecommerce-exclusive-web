import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Whislist from "./pages/whislist";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Account from "./pages/account";

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
      </Routes>
    </Router>
  );
}
