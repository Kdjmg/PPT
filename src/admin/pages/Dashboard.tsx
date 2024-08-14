import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Bienvenue dans ton interface utilisateur</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">Nombre de commandes du jour</h3>
                        <p className="mt-2 text-gray-600">Tu as fait zéro commande, tu pues</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">Commandes en cours</h3>
                        <p className="mt-2 text-gray-600">Y'a un gros porc qui a commandé, je pense</p>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">Notifications</h3>
                        <p className="mt-2 text-gray-600">Liste des notifications</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
