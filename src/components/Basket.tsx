import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { basket, close } from 'ionicons/icons';

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
  cartItems: {title: string; price: number}[];
};
const Basket: React.FC<BasketProps> = () => {
  const [cartItems, ] = useState<listmenu[]>([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const totalPrice = cartItems.reduce((total: number, item: { price: string; }) => total + parseFloat(item.price.toString().replace("€", "")), 0);
  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };


  return (
    <>
      <div className={`fixed top-32 right-0 h-full bg-blue-950 transition-transform duration-500 ease-in-out ${isBasketOpen ? ' w-1/2 md:w-1/4' : 'w-0'} overflow-hidden`}>
        <button onClick={toggleBasket} className="text-white mb-4">
          <IonIcon icon={isBasketOpen ? close : basket} size="large"></IonIcon>
        </button>
        {isBasketOpen && (
          <div className="text-white ml-4">
            <h2 className="text-xl font-bold mb-4">Votre Panier</h2>
            {cartItems.map((item, index) => (
              <div key={index}>
              <p key={item.title}>{item.price}</p>
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