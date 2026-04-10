import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Login from './pages/Login/index';
import CallManagement from './pages/CallManagement';
import Customer from './pages/Customer/index';
import EmployeeManagement from './pages/EmployeeManagement/index';
import QueueManagementPage from './pages/QueueManagementPage/QueueManagementPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calls" element={<CallManagement />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/employees" element={<EmployeeManagement />} />
        <Route path="/queue" element={<QueueManagementPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;