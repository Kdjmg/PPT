import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getTitle = (path: string) => {
        switch (path) {
            case '/admin/dashboard':
                return 'Dashboard';
            case '/admin/history':
                return 'Historique';
            case '/admin/profile':
                return 'Profil';
            case '/admin/settings':
                return 'Paramètres';
            default:
                return 'Dashboard';
        }
    };

    const [title, setTitle] = useState(getTitle(location.pathname));

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin/login');
    };

    const handleNavigation = (path: string) => {
        setTitle(getTitle(`/admin/${path}`));
        navigate(path);
    };

    return (
        <aside className="w-64 bg-blue-800 text-white flex flex-col fixed h-full">
            <div className="p-4 text-2xl font-semibold border-b border-blue-700">
                {title}
            </div>
            <nav className="flex-1 overflow-y-auto">
                <ul className="space-y-2 mt-4">
                    <li>
                        <button 
                            onClick={() => handleNavigation('dashboard')}
                            className="w-full text-left block p-4 hover:bg-blue-700">
                            Dashboard
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => handleNavigation('history')}
                            className="w-full text-left block p-4 hover:bg-blue-700">
                            Historique de commande
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => handleNavigation('profile')}
                            className="w-full text-left block p-4 hover:bg-blue-700">
                            Profil
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => handleNavigation('settings')}
                            className="w-full text-left block p-4 hover:bg-blue-700">
                            Paramètres
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={handleLogout}
                            className="w-full text-left block p-4 hover:bg-blue-700">
                            Déconnexion
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
