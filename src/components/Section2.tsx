import React from 'react';
import { IonIcon } from '@ionic/react';
import { fastFoodOutline,menuOutline, homeOutline, timerOutline,} from 'ionicons/icons';

export const Section2: React.FC = () => {
  return (
    <> 
    <section className="text-center py-8 bg-white">
      <h2 className="text-blue-900 font-bold uppercase">Une Qualité remarquable</h2>
      <h1 className="text-3xl font-bold text-gray-900 my-4 uppercase">La qualité de PPT</h1>
      
      <div className="flex justify-center items-center mt-6">
        <div className="h-px w-52 bg-blue-500 mr-2"></div>
        <img src="../public/ppt.png" className="h-full w-[42px]" alt="Logo PPT" />
        <div className="h-px w-52 bg-blue-500 ml-2"></div>
      </div>
<div className='flex flex-col items-center align-around justify-center '></div>
      <div className="flex flex-col items-center align-around md:flex-row justify-around mt-8">
        <div className="max-w-xs m-4 text-left flex flex-col items-center">
          <IonIcon icon={menuOutline} className="text-blue-900 text-5xl mb-2" />
          <h3 className="text-xl font-bold text-gray-900 uppercase">Que du choix de Qualité</h3>
          <p className="text-gray-700"> Tacos, Pates, Panini, où encore TexMex, il y'aura bien votre plaisir au PPT</p>
        </div>
        <div className="max-w-xs m-4 text-left flex flex-col items-center align-around">
          <IonIcon icon={homeOutline} className="text-blue-900 text-5xl mb-2" />
          <h3 className="text-xl font-bold text-gray-900 uppercase">Commander en ligne</h3>
          <p className="text-gray-700">Tous notre menu depuis notre site internet pour un service optimal</p>
        </div>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-around mt-8">
        <div className="max-w-xs m-4 text-left flex flex-col items-center">
          <IonIcon icon={timerOutline} className="text-blue-900 text-5xl mb-2" />
          <h3 className="text-xl font-bold text-gray-900 uppercase flex items-center justify-around">Livraisons rapides</h3>
          <p className="text-gray-700 flex items-center justify-around">La proximité de nos restaurants vous permet d'être livrer en 45 minutes !</p>
        </div>
        <div className="max-w-xs m-4 text-left flex flex-col items-center">
          <IonIcon icon={fastFoodOutline} className="text-blue-900 text-5xl mb-2" />
          <h3 className="text-xl font-bold text-gray-900 flex items-center justify-around uppercase">Produits 100% MAISON</h3>
          <p className="text-gray-700 flex items-center justify-around">Nos produits frais et préparé par nos équipes chaque jour, pour vous offrir le meilleur du goût !</p>
        </div>
        </div>
      
    </section>
    </>
  )}
