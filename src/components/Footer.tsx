import React from "react";
import { IonIcon } from '@ionic/react';
import { logoInstagram, logoSnapchat } from 'ionicons/icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">

          {/* Informations de Contact */}
          <div className="w-full md:w-1/3">
            <h5 className="text-xl text-gray-400 font-bold mb-12">Contactez-nous :</h5>
            <ul className="space-y-2">
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
          <div className="w-full md:w-1/3">
            <h5 className="text-xl text-gray-400 font-bold mb-12">Suivez-nous :</h5>
            <ul className="flex justify-start space-x-4 md:justify-start">
              <li>
                <a
                  href="https://www.instagram.com/leppthellemmes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-gray-400 text-pink-700"
                >
                  <IonIcon icon={logoInstagram} size="large" />
                </a>
              </li>
              <li>
                <a
                  href="https://snapchat.com/t/Lq6MX6Mw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Snapchat"
                  className="hover:text-gray-400 text-yellow-300"
                >
                  <IonIcon icon={logoSnapchat} size="large" />
                </a>
              </li>
            </ul>
          </div>

          {/* Google Maps Iframe */}
          <div className="w-full md:w-1/3">
            <h5 className="text-xl text-gray-400 font-bold mb-12">Où nous trouver :</h5>
            <div className="w-full h-0 pb-[56.25%] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8827396526194!2d3.1024042!3d50.6292951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d7e548f79079%3A0x8c4fa06479ce937b!2sLe%20PPT!5e0!3m2!1sfr!2sus!4v1722718312485!5m2!1sfr!2sus"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Le PTT. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
