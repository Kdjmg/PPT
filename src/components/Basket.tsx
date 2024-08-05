import React from 'react';
import { IonIcon } from '@ionic/react';
import { basket, close, trash} from 'ionicons/icons';

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

  return (
    <>
      <div className={`fixed top-32 right-0 h-full bg-blue-950 transition-transform duration-500 ease-in-out ${isBasketOpen ? ' w-1/2 md:w-1/4' : 'w-0'} overflow-hidden`}>
        <button onClick={toggleBasket} className="text-white mb-4">
          <IonIcon icon={isBasketOpen ? close : basket} size="large"></IonIcon>
        </button>
        {isBasketOpen && (
          <div className="text-white ml-4 overflow-y-auto h-3/5">
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
            <p className="font-bold text-xl mt-4">Total: {totalPrice.toFixed(2)}€</p>
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
