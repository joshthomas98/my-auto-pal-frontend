import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserRegEnter from "./pages/UserRegEnter";
import About from "./pages/About";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import DisplayVehicleDetails from "./pages/DisplayVehicleDetails";
import EstablishmentLogin from "./pages/EstablishmentLogin";

// import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserRegEnter />} />

        <Route path="/about" element={<About />} />

        <Route path="/success" element={<Success />} />

        <Route path="/failure" element={<Failure />} />

        <Route
          path="/displayvehicledetails"
          element={<DisplayVehicleDetails />}
        />

        <Route path="/establishmentlogin" element={<EstablishmentLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
