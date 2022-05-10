import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home.jsx";
import Signin from "./User/Signin.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import DetailProduct from "./pages/DetailProduct/DetailProduct.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailproduct" element={<DetailProduct />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
