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
          <ul className="">
              
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=31+Rue+Roger+Salengro%2C+59800+Lille"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  31 Rue Roger Salengro, 59800 Lille
                </a>
              </li>
              <li>
                <a
                  href="tel:0988330912"
                  className="text-blue-500 hover:underline"
                >
                  Tel : 09 88 33 09 12
                </a>
              </li>
            </ul>
        
        </div>

        {/* Réseaux Sociaux */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h5 className="text-xl font-bold mb-4">Suivez-nous :</h5>
          <ul className="flex space-x-4">
            

            <li>
              <a href="https://www.instagram.com/leppthellemmes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-400 text-pink-700">
              <IonIcon icon={logoInstagram} size="large" />
              </a>
            </li>
            <li>
              <a href="https://snapchat.com/t/Lq6MX6Mw" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="hover:text-gray-400 text-yellow-300">
                <IonIcon icon={logoSnapchat} size="large" />
              </a>
            </li>
          </ul>
        </div>

        {/* Google Maps Iframe */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h5 className="text-xl font-bold mb-4">Où nous trouver :</h5>
          <div className="relative w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8827396526194!2d3.1024042!3d50.6292951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d7e548f79079%3A0x8c4fa06479ce937b!2sLe%20PPT!5e0!3m2!1sfr!2sus!4v1722718312485!5m2!1sfr!2sus"
            width=""
            height="250"
            className="border-spacing-2"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map">
          </iframe>
          </div>
          
        </div>
      </div>


      
      <div className="container mx-auto px-4 mt-8 text-center border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Le PTT. Tous droits réservés.</p>
      </div>
    </footer>
  );
};
