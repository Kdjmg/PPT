import React from "react";
import { IonIcon } from '@ionic/react';
import { logoInstagram, logoSnapchat } from 'ionicons/icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-wrap justify-around items-center">

        {/* Informations de Contact */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h5 className="text-xl font-bold mb-4">Contactez-nous</h5>
          <p>31 Rue Roger Salengro, 59800 Lille</p>
          <p>Tel : 09 88 33 09 12</p>
          <p>Email : contact@example.com</p>
        </div>

        {/* Réseaux Sociaux */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h5 className="text-xl font-bold mb-4">Suivez-nous :</h5>
          <ul className="flex space-x-4">
            

            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-400">
              <IonIcon icon={logoInstagram} size="40px" />
              </a>
            </li>
            <li>
              <a href="https://web.snapchat.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-400">
                <IonIcon icon={logoSnapchat} size="40px" />
              </a>
            </li>
          </ul>
        </div>

        {/* Google Maps Iframe */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h5 className="text-xl font-bold mb-4">Où nous trouver :</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8827396526194!2d3.1024042!3d50.6292951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d7e548f79079%3A0x8c4fa06479ce937b!2sLe%20PPT!5e0!3m2!1sfr!2sus!4v1722718312485!5m2!1sfr!2sus"
            width="400"
            height="200"
            className="border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>


      
      <div className="container mx-auto px-4 mt-8 text-center border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Le PTT. Tous droits réservés.</p>
      </div>
    </footer>
  );
};
