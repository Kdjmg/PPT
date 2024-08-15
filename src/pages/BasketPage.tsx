// BasketPage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { trash } from 'ionicons/icons';

type ListMenu = {
  title: string;
  descript: string;
  img: string;
  price: string;
  tag: string;
  meatSelections?: string[];
  sauceSelections?: string[];
  quantity?: number;
};

const BasketPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<ListMenu[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      const items = JSON.parse(storedCartItems);
      setCartItems(items);
      const price = items.reduce((acc: number, item: { price: string; quantity: number; }) => acc + (parseFloat(item.price) || 0) * (item.quantity || 1), 0);
      setTotalPrice(price);
    }
  }, []);

  const handleRemove = (index: number) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    const price = updatedCartItems.reduce((acc, item) => acc + (parseFloat(item.price) || 0) * (item.quantity || 1), 0);
    setTotalPrice(price);
  };

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedCartItems = [...cartItems];
    if (newQuantity <= 0) {
      updatedCartItems.splice(index, 1);
    } else {
      updatedCartItems[index].quantity = newQuantity;
    }
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    const price = updatedCartItems.reduce((acc, item) => acc + (parseFloat(item.price) || 0) * (item.quantity || 1), 0);
    setTotalPrice(price);
  };

  const handlePayment = () => {
    navigate('/payment', { state: { cartItems, totalPrice } });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Votre Panier</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Votre panier est vide.</p>
      ) : (
        <div className="flex flex-col space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-start justify-between border-b pb-4">
              <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
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
                    onClick={() => handleQuantityChange(index, (item.quantity || 1) - 1)}
                    className="bg-gray-200 px-2 rounded-md"
                    disabled={(item.quantity || 1) <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(index, (item.quantity || 1) + 1)}
                    className="bg-gray-200 px-2 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-lg font-bold">{item.price}</span>
                <button
                  onClick={() => handleRemove(index)}
                  className="text-red-500 hover:text-red-700 mt-2"
                >
                  <IonIcon icon={trash} size="small"></IonIcon>
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <p className="font-bold text-xl">Total: {totalPrice.toFixed(2)}€</p>
              <button onClick={handlePayment} className="bg-blue-950 hover:bg-blue-900 text-white px-4 py-2 rounded-lg">
                Confirmez le panier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
