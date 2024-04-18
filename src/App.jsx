import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserRegEnter from "./pages/UserRegEnter";
import About from "./pages/About";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import DisplayVehicleDetails from "./pages/DisplayVehicleDetails";
import EstablishmentLogin from "./pages/EstablishmentLogin";
import EstablishmentRegister from "./pages/EstablishmentRegister";
import LoadingSpinner from "./components/LoadingSpinner";

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

        <Route
          path="/establishmentregister"
          element={<EstablishmentRegister />}
        />

        <Route path="/loadingspinner" element={<LoadingSpinner />} />
      </Routes>
    </Router>
  );
};

export default App;
