import { useState, useEffect, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { close, menu, basket } from 'ionicons/icons'; 
import { NavLink } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Importez le contexte

const Nav = () => {
  const Links = [
    { name: "ACCUEIL", link: "/" },
    { name: "MENU", link: "/menu" },
    { name: "CONTACT", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleMenuRef = useRef<HTMLDivElement>(null);
  const { cartItems } = useCart(); // Utilisez le contexte du panier

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

  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <div className="z-10 shadow-md w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between bg-blue-950 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <img className="w-24" src="/ppt.png" alt="Logo" />
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
            <li className="text-xl my-7 md:my-0 relative">
              <NavLink
                to="/basket"
                className="text-white hover:text-gray-400 duration-500 flex items-center"
                onClick={() => setOpen(false)}
              >
                <IonIcon icon={basket} size="large" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                    {totalItems}
                  </span>
                )}
              </NavLink>
            </li>
            <li className="md:hidden text-xl my-7">
              <NavLink
                to="/login"
                className="text-white hover:text-gray-400 duration-500 flex items-center"
                onClick={() => setOpen(false)}
              >
                Se connecter
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/login"
            className="text-white bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full duration-300"
          >
            Se connecter
          </NavLink>
          <NavLink to="/basket">
            <button className="z-20 p-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg flex items-center justify-center relative">
              <IonIcon icon={basket} size="large" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                  {totalItems}
                </span>
              )}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
