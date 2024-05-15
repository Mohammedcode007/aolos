import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "normalize.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
// import TipAmount from './components/TipAmount/TipAmount';
import Dashboard from "./components/Dashboard/Dashboard";
// import Rating from './components/Rating/Rating';
import BillingTab from "./components/BillingContent/BillingTab";
import Setting from "./components/Setting/Setting";
import EntryPage from "./pages/entry/EntryPage";
import GamePage from "./pages/game/GamePage";


import Test from "./components/Test/Test";


import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import OTPPage from './components/OTPPage/OTPPage';
import ChangePassword from './components/ChangePassword/ChangePassword';
import RedirectPage from "./components/Redirect/RedirectPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/otp-verification" element={<OTPPage />} />
        <Route path="/billing" element={<BillingTab />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/entry" element={<EntryPage />} />
        <Route path="/game" element={<GamePage />} />

        
        <Route path="/test" element={<Test />} />

        <Route path="/redirect" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
};

export default App;
