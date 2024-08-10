import { useState, useEffect, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { close, menu } from 'ionicons/icons'; 
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const Links = [
        { name: "ACCUEIL", link: "/" },
        { name: "MENU", link: "/menu" },
        { name: "CONTACT", link: "/contact" },
        { icon: "basket", link: "/basket" },
    ];

    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const toggleMenuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current && 
            !menuRef.current.contains(event.target as Node) &&
            toggleMenuRef.current &&
            !toggleMenuRef.current.contains(event.target as Node)
        ) {
            toggleMenu();
        }
    };

    useEffect(() => {
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className="z-10 shadow-md w-full sticky top-0 left-0">
            <div className="md:flex items-center justify-between bg-blue-950 py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                    <img className="w-24" src="/ppt.png" alt="" />
                </div>

                <div
                    ref={toggleMenuRef}
                    onClick={toggleMenu}
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                >
                    <IonIcon className="text-white" icon={open ? close : menu}></IonIcon>
                </div>

                <div
                    ref={menuRef}
                    className={`fixed md:static top-0 left-0 h-[100vh] md:h-auto bg-blue-950 transition-all duration-200 ease-in-out ${
                        open ? 'w-[50%]' : 'w-0 md:w-auto'
                    } overflow-hidden md:w-auto md:flex md:items-center`}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-8 items-center justify-center md:justify-end h-full md:h-auto">
                        {Links.map((link, index) => (
                            <li key={index} className="text-xl my-7 md:my-0">
                                <NavLink
                                    to={link.link}
                                    className="text-white hover:text-gray-400 duration-500 flex items-center"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
