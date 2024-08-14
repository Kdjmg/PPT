import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthProvider';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

const AdminApp: React.FC = () => {
    return (
        <AuthProvider>
        
                <Routes>
                    <Route path='login' element={<Login/>}></Route>
                    <Route path='dashboard' element={<PrivateRoute element={<Dashboard />}/>} />
                </Routes>
            
        </AuthProvider>
    );
};

export default AdminApp;
