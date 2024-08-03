import React from 'react';

export const Section1: React.FC = () => {
  return (
    <>
      <h1 className="flex justify-center font-bold uppercase text-blue-900 mt-4">Bienvenue au PPT</h1>
      <h2 className="flex justify-center uppercase text-3xl text-center mt-2 px-4">Commandez en ligne et faites-vous livrer chez vous !</h2>

      <div className="flex justify-center items-center mt-6">
        <div className="h-px w-52 bg-blue-500 mr-2"></div>
        <img src="/ppt.png" className="h-full w-[42px]" alt="Logo PPT" />
        <div className="h-px w-52 bg-blue-500 ml-2"></div>
      </div>

      <div className="flex justify-around flex-wrap flex-col md:flex-row items-center mt-8">
        <img src="/tacosfritecoca.png" alt="" className=' w-2/4 md:w-2/6' />
        <div className="border rounded-lg p-6 bg-white shadow-lg w-3/4 md:w-1/2 mr-4">
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-4">Ouvert du Lundi à Jeudi de 11h30 à 14h30 18h30 23h30 et Vendredi à Dimanche de 18h30 à 23h30 </h3>
          <p className="flex justify-center text-center text-lg m-4">Vous avez une petite faim ou un appétit dévorant ?</p>
          <p className="flex justify-center text-center text-lg m-4"> Pas de problème ! Venez passer commande chez nous et faites-vous livrer chez vous dans les plus brefs délais. </p>
          <p className="flex justify-center text-center text-lg m-4"> Chez PPT, nous comprenons l'importance d'un repas rapide et délicieux. </p>
          <p className="flex justify-center text-center text-lg m-4">Que vous ayez envie de pâtes savoureuses, de paninis croustillants, ou de poulet juteux, nous avons ce qu'il vous faut. Commandez en ligne et profitez d'un service de livraison rapide et fiable, directement à votre porte.</p>
          <p className="flex justify-center text-center text-lg m-4">Bon appétit !</p>
        
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <div className="w-1/3">
          <img src="pates.jpg" alt="Pâtes" className="rounded-lg shadow-lg" />
        </div>
        <div className="w-1/3">
          <img src="/panini.jpg" alt="Panini" className="rounded-lg shadow-lg" />
        </div>
        <div className="w-1/3">
          <img src="/tenders.jpg" alt="Poulet" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </>
  );
};
