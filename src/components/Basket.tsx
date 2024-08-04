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
          <div className="text-white ml-4 ">
            <h2 className="text-xl font-bold mb-4">Votre Panier</h2>
            {cartItems.map((item, index) => (
              <div className="flex overflow-y-auto max-h-12 " key={index}>
                <p className='mr-4'>{item.title}</p>
                <p className='ml-4'>{item.price}</p>
                <button  onClick={() => removeFromCart(index)} className="text-red-500 ml-2">
                  <IonIcon icon={trash} size="small"></IonIcon>
                </button>
              </div>
              
            ))}
            
            <p className="font-bold text-xl mt-4">Total: {totalPrice.toFixed(2)}€</p>
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
