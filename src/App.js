import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingFull";
import Login from "./pages/LoginPage/Login";
import HomePage from "./pages/homepage/HomePage";
import Recarregar from "./pages/RecarregarCartao/Recarregar";
import Pagamento from "./pages/Pagar/Pagamento";
import Faq from "./pages/faq/Faq";  


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cartoes" element={<Recarregar />} />
        <Route path="/recarregar" element={<Pagamento />} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
    </Router>
  );
}

export default App;