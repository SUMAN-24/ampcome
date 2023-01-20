import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/doctor_dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
