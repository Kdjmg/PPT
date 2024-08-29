import React, { useState, useRef, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { basket, trash } from 'ionicons/icons';
import { CartItem, useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Basket: React.FC = () => {
  const { state, dispatch } = useCart();
  const { cartItems } = state;
  const navigate = useNavigate();

  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const basketRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const calculateTotalPrice = (): number => {
    return cartItems.reduce((total, item) => {
      const itemTotal = (parseFloat(item.price) || 0) * (item.quantity || 1);
      return total + itemTotal;
    }, 0);
  };
  const calculateItemTotalPrice = (item:CartItem): number => {
    const itemTotal = (parseFloat(item.price) || 0) * (item.quantity || 1);
    return itemTotal;
  };

  const handlePayment = () => {
    const totalPrice = calculateTotalPrice();
    navigate('/payment', { state: { cartItems, totalPrice } });
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { index, newQuantity } });
  };

  const removeFromCart = (index: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  // Fonction pour gérer les clics à l'extérieur du panier
  const handleClickOutside = (event: MouseEvent) => {
    if (
      basketRef.current &&
      !basketRef.current.contains(event.target as Node) &&
      toggleButtonRef.current &&
      !toggleButtonRef.current.contains(event.target as Node)
    ) {
      setIsBasketOpen(false);
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
    <div>
      {/* Bouton pour ouvrir ou fermer le panier */}
      <button 
        onClick={toggleBasket}
        ref={toggleButtonRef} // Ajout de la référence du bouton
        className="fixed z-30 top-6 right-4 p-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg"
      >
        <IonIcon icon={basket} size="large" />
        {cartItems.length > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
            {cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0)}
          </span>
        )}
      </button>

      {/* Panier */}
      <div
        ref={basketRef} // Ajout de la référence du panier
        className={`fixed z-10 top-32 right-0 h-full bg-white transition-transform duration-500 ease-in-out ${
          isBasketOpen ? 'w-[85%] md:w-[30%]' : 'w-0'
        } overflow-hidden shadow-lg border-l border-gray-300`}
      >
        {isBasketOpen && (
          <div className="text-gray-900 p-4 overflow-y-auto h-[77%] md:h-[68%]">
            <h2 className="text-xl font-bold mb-4">Votre Panier</h2>
            {cartItems.length === 0 ? (
              <p className="text-center">Votre panier est vide.</p>
            ) : (
              <div className="flex flex-col space-y-4">
                {cartItems.map((item, index: number) => (
                  <div key={index} className="flex items-start justify-between border-b pb-4">
                    <img src={item.img} alt={item.title as string} className="w-20 h-20 object-cover rounded-md" />
                    <div className="flex-1 px-4">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.descript}</p>
                      {item.meatSelections && item.meatSelections.length > 0 && (
                        <div>
                          <span className="font-semibold">Viandes choisies:</span>
                          <span className="block text-sm text-gray-700">{item.meatSelections.join(', ')}</span>
                        </div>
                      )}
                      {item.sauceSelections && item.sauceSelections.length > 0 && (
                        <div>
                          <span className="font-semibold">Sauces choisies:</span>
                          <span className="block text-sm text-gray-700">{item.sauceSelections.join(', ')}</span>
                        </div>
                      )}
                      <div className="mt-2 flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(index, (item.quantity || 1) - 1)}
                          className="bg-gray-200 px-2 rounded-md"
                          disabled={(item.quantity || 1) <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}
                          className="bg-gray-200 px-2 rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-lg font-bold">{calculateItemTotalPrice(item).toFixed(2)}</span>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 hover:text-red-700 mt-2"
                      >
                        <IonIcon icon={trash} size="small" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {cartItems.length > 0 && (
              <div className="mt-6">
                <div className="flex justify-between items-center mb-4">
                  <p className="font-bold text-xl">Total: {calculateTotalPrice().toFixed(2)}€</p>
                  <button onClick={handlePayment} className="bg-blue-950 hover:bg-blue-900 text-white px-4 py-2 rounded-lg">
                    Confirmez le panier
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
