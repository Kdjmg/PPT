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
        
        <img src="/pptskin.png" alt="" className='' />
        <div className=" p-6 bg-white md:w-1/2 w-full">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-4">Ok Jamy, mais c'est quoi PPT ? </h3>
        
          <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-8 space-y-4 md:space-y-0">
    <div className="relative  p-6  text-center w-full md:w-3/4 mx-auto">
        <img src="/jammy.png" alt="Jamy" className="absolute top-8 left-4 transform -translate-x-1/2 -translate-y-1/2 w-[30%] md:w-[30%] rounded-lg" />
        
        <div className="ml-[15%]">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Eh bien, mon chèr Fred ça veut dire Panini, Pâtes, Tacos. </h2>
            <p className="text-lg  text-gray-800 mb-4">Et figurez-vous que si vous avez une petite faim ou un gros appétit...</p>
            <p className="text-lg text-gray-700 mb-4">Pas de souci, nous avons de quoi vous combler ! Passez commande chez <span className="font-semibold">PPT</span> et faites-vous livrer rapidement à domicile.</p>
            <p className="text-lg text-gray-700 mb-6">Chez <span className="font-semibold">PPT</span>, nous savons à quel point un repas savoureux et rapide est essentiel. Que vous rêviez de pâtes gourmandes, de paninis croustillants, ou de poulet tendre et juteux, nous avons ce qu'il vous faut. Commandez en ligne et profitez d'une livraison express, directement à votre porte.</p>
            <p className="text-2xl font-bold text-gray-800">Bon appétit !</p>
        </div>
    </div>
</div>



          
        
        </div>
      </div>

    </>
  );
};
