import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginOTP from "./Component/LoginOTP";
import Verifycation from "./Component/Verifycation";
import Home from "./pages/Home";
const App = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<LoginOTP />} />
      <Route path="/verifycation" element={<Verifycation />} />
    </Routes>
  );
};

export default App;
