import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

const AdminApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
    </Routes>
  );
};

export default AdminApp;
