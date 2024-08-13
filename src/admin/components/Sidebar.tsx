
const Sidebar = () => {
    return (
        <div className="w-64 h-full shadow-md bg-white absolute">
            <ul className="relative">
                <li className="relative px-6 py-3">
                    <a className="flex items-center text-sm font-semibold text-gray-900 hover:text-gray-500" href="/dashboard">
                        Dashboard
                    </a>
                </li>
                {/* Ajoutez d'autres liens ici */}
            </ul>
        </div>
    );
};

export default Sidebar;
