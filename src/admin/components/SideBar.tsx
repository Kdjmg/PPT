import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        setIsSidebarOpen(false);  // Fermer la sidebar après la navigation sur mobile
    };

    return (
        <div>
            {/* Hamburger button for mobile */}
            <button
                className="fixed lg:hidden p-4 text-white bg-blue-800"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                className={` fixed top-0 left-0 lg:translate-x-0 h-full w-64 bg-blue-800 text-white transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform lg:transform-none z-50`}
            >
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
            
            {/* Overlay for mobile when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default Sidebar;
