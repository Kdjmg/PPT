import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Settings from './pages/Settings';
import Profile from './pages/Profil';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Login from './pages/Login';
import Sidebar from './components/SideBar';

const AdminApp: React.FC = () => {
  const location = useLocation();
  const showSidebar = !location.pathname.includes('/login'); // Conditionner l'affichage du Sidebar

  return (
    <div className="flex h-screen overflow-hidden">
      {showSidebar && (
        <Sidebar />
      )}
      <main
        className={`flex-1 p-6 ${showSidebar ? 'ml-64' : ''} bg-gray-100`}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminApp;
