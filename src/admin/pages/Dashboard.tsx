import React from 'react';
import SideBar from '../components/SideBar';

const Dashboard: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <SideBar/>
            
            <main className="flex-1 p-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Statistics</h3>
                            <p className="mt-2 text-gray-600">Overview of statistics</p>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Recent Activities</h3>
                            <p className="mt-2 text-gray-600">List of recent activities</p>
                        </div>
                        <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Notifications</h3>
                            <p className="mt-2 text-gray-600">List of notifications</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
