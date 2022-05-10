import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home.jsx";
import SignUp from "./User/SignUp.jsx";
import Login from "./User/Login.jsx";
import Profile from "./User/Profile.jsx";
import EditProfile from "./User/EditProfile.jsx";
import Header from "./components/Header.jsx";
import FooterComponent from "./components/Footer.jsx";
import DetailProduct from "./pages/DetailProduct/DetailProduct.jsx";
import CardDetail from "./pages/CardDetail/CardDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailproduct" element={<DetailProduct />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/card" element={<CardDetail />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
