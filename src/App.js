import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingFull";
import Login from "./pages/LoginPage/Login";
import HomePage from "./pages/homepage/HomePage";
import Recarregar from "./pages/RecarregarCartao/Recarregar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recarregar" element={<Recarregar />} />
      </Routes>
    </Router>
  );
}

export default App;