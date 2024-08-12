import React from 'react';
import { IonIcon } from '@ionic/react';
import {homeOutline, timerOutline, globe, checkmarkCircle} from 'ionicons/icons';

export const Section2: React.FC = () => {
  return (
    <> 
    <section className="text-center py-8 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 my-4 uppercase">La qualité chez PPT</h1>
      <h2 className="text-blue-900 font-bold uppercase">Une Qualité remarquable 😋 </h2>

      
      <div className="flex justify-center items-center mt-6">
        <div className="h-px w-52 bg-blue-500 mr-2"></div>
        <img src="/ppt.png" className="h-full w-[42px]" alt="Logo PPT" />
        <div className="h-px w-52 bg-blue-500 ml-2"></div>
      </div>
<div className='flex flex-col items-center align-around justify-center '></div>
      <div className="flex flex-col items-center align-around md:flex-row justify-around mt-8">
        <div className="max-w-xs m-4 text-center flex flex-col items-center">
          <IonIcon icon={checkmarkCircle} className="text-green-500 text-5xl mb-2" />
          <h3 className="text-xl font-bold text-gray-900 uppercase">choix de Qualité</h3>
          <p className="text-gray-700"> Chez le PPT, nous privilégions des ingrédients de première qualité pour vous offrir un goût incomparable à chaque bouchée</p>
        </div>
        <div className="max-w-xs m-4 text-center flex flex-col items-center align-around">
          <IonIcon icon={globe} className="text-blue-900 text-5xl mb-2" />
          <h3 className="text-xl font-bold text-gray-900 uppercase">Commander en ligne</h3>
          <p className="text-gray-700"> Commandez en ligne facilement et profitez de la simplicité d'un repas délicieux, livré directement chez vous.</p>
        </div>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-around mt-8">
        <div className="max-w-xs m-4 text-center flex flex-col items-center">
          <IonIcon icon={timerOutline} className="text-blue-900 text-5xl mb-2" />
          <h3 className="text-xl font-bold text-gray-900 uppercase flex items-center justify-around">Livraisons rapides</h3>
          <p className="text-gray-700 flex items-center justify-around"> Savourez vos plats préférés en un rien de temps grâce à notre service de livraisons ultra-rapide.</p>
        </div>
        <div className="max-w-xs m-4 text-center flex flex-col items-center">
          <IonIcon icon={homeOutline} className="text-blue-900 text-5xl mb-2" />
          <h3 className="text-xl font-bold text-gray-900 flex items-center justify-around uppercase">Produits 100% MAISON</h3>
          <p className="text-gray-700 flex items-center justify-around"> Chaque plat est préparé avec passions dans nos cuisines, à partir de recettes 100% maison. </p>
        </div>
        </div>
      
    </section>
    </>
  )}
