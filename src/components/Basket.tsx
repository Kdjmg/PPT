import React, { useEffect, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { basket, close, trash } from 'ionicons/icons';

type listmenu = {
  title: string;
  descript: string;
  img: string;
  price: string;
  tag: string;
};

type BasketProps = {
  isBasketOpen: boolean;
  toggleBasket: () => void;
  cartItems: listmenu[];
  removeFromCart: (index: number) => void;
};

const Basket: React.FC<BasketProps> = ({ isBasketOpen, toggleBasket, cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.toString().replace("€", "")), 0);
  const basketRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (basketRef.current && !basketRef.current.contains(event.target as Node)) {
      toggleBasket();
    }
  };

  useEffect(() => {
    if (isBasketOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBasketOpen]);

  return (
    <>
      <div
        ref={basketRef}
        className={`fixed top-32 right-0 h-full bg-blue-950 transition-transform duration-500 ease-in-out ${
          isBasketOpen ? ' w-1/2 md:w-1/4' : 'w-0'
        } overflow-hidden`}
      >
        <button onClick={toggleBasket} className="text-white mb-4">
          <IonIcon icon={isBasketOpen ? close : basket} size="large"></IonIcon>
        </button>
        {isBasketOpen && (
          <div className="text-white ml-4 overflow-y-auto h-[70%] md:h-[55%]">
            <h2 className="text-xl font-bold mb-4">Votre Panier</h2>
            {cartItems.length === 0 ? (
              <p>Votre panier est vide.</p>
            ) : (
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between border-b-2 pb-2">
                  <span className="font-bold w-1/2">Article</span>
                  <span className="font-bold w-1/4 text-center">Prix</span>
                  <span className="font-bold w-1/4 text-center">Action</span>
                </div>
                {cartItems.map((item, index) => (
                  <div className="flex justify-between items-center border-b py-2" key={index}>
                    <span className="w-1/2">{item.title}</span>
                    <span className="w-1/4 text-center">{item.price}</span>
                    <button onClick={() => removeFromCart(index)} className="text-red-500 w-1/4 text-center">
                      <IonIcon icon={trash} size="small"></IonIcon>
                    </button>
                  </div>
                ))}
              </div>
            )}
            {cartItems.length > 0 && (
              <div className="flex justify-between items-center mt-4">
                <p className="font-bold text-xl">Total: {totalPrice.toFixed(2)}€</p>
                <button className="bg-green-500 text-white mr-4 px-4 py-2 rounded-lg ml-4">
                  Payer
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <button onClick={toggleBasket} className="fixed bottom-4 right-4 p-2 bg-blue-900 text-white rounded-full shadow-lg">
        <IonIcon icon={basket} size="large"></IonIcon>
      </button>
    </>
  );
};

export default Basket;
