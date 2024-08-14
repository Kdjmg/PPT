import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-blue-800 text-white flex flex-col">
            <div className="p-4 text-2xl font-semibold border-b border-blue-700">
                Dashboard
            </div>
            <nav className="flex-1 overflow-y-auto">
                <ul className="space-y-2 mt-4">
                    <li>
                        <Link to="/admin/dashboard" className="block p-4 hover:bg-blue-700">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/profile" className="block p-4 hover:bg-blue-700">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/settings" className="block p-4 hover:bg-blue-700">
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/logout" className="block p-4 hover:bg-blue-700">
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
