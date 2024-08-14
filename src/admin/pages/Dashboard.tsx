import { Sidebar } from 'flowbite-react';
import React from 'react';

const Dashboard = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p>Bienvenue dans l'interface d'administration.</p>
            <Sidebar/>
        </div>
    );
};

export default Dashboard;
