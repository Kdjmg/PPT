import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Obtenir la route actuelle

  useEffect(() => {
    window.scrollTo(0, 0); // Remonter en haut de la page
  }, [pathname]); // Exécuter à chaque changement de route

  return null; // Pas besoin de render quoi que ce soit
};

export default ScrollToTop;
