import React from "react";
import Home from "./components/BIDDER/Home";
import Dashboard from "../../Bid_hub/src/components/Dashboard/dashboard";
import HouseDescription from "./components/BIDDER/HouseDescription";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roles from "./components/SUPER-ADMIN/Roles/Roles";
import RolesDescription from "./components/SUPER-ADMIN/Roles/RolesDescription";
import DashboardComponents from "./components/SUPER-ADMIN/dashboardComponents/DashboardComponents";
import Users from "./components/SUPER-ADMIN/Users/Users";
import LISTINGS from "./components/SUPER-ADMIN/Listings/LISTINGS";
import Login from "./components/BIDDER/LoginForm/Login";
import Register from "./components/BIDDER/RegisterForm/Register";

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/itemDetails" element={<HouseDescription />} />
        <Route path="/dashboard" element={<DashboardComponents />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/users" element={<Users />} />
        <Route path="/listings" element={<LISTINGS />} />
        {/* <Route path='/item' element={<Items/>}/> */}
      </Routes>
    </Router>
  </div>
);

export default App;
