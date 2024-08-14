import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className='flex h-screen bg-gray-100'>
            
            
            <main className="flex-1 p-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Bienvenu dans ton interface utilisateur</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Nombres de commande du jour</h3>
                            <p className="mt-2 text-gray-600">Tu as fait zéro commande tu pues</p>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Commande en cours</h3>
                            <p className="mt-2 text-gray-600">Y'a un gros porc qui a commander je penses</p>
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
