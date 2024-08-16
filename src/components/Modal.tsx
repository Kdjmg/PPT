import React, { useState, useEffect } from 'react';
import { CartItem, useCart } from '../contexts/CartContext';

type listmenu = {
  price: string;
  title: string;
  img:string;
  requiresMeatChoice?: boolean;
  requiredSauceChoice?: boolean;
  repeatCount?: number;
  meatOptions?: string[];
  sauceOptions?: string[];
};

type ModalProps = {
  item: listmenu;
  onClose: (meatSelections: string[], sauceSelections: string[]) => void;
  onCancel: ()=> void; 
};

const Modal: React.FC<ModalProps> = ({ item, onClose, onCancel }) => {
  const { title, requiresMeatChoice, requiredSauceChoice, meatOptions, sauceOptions, repeatCount } = item;
  const [meatSelections, setMeatSelections] = useState<string[]>(repeatCount ? Array(repeatCount).fill('') : []);
  const [sauceSelections, setSauceSelections] = useState<string[]>([]);
  const [isConfirmDisabled, setIsConfirmDisabled] = useState(true);
  const { dispatch } = useCart();


  useEffect(() => {
    const isMeatValid = !requiresMeatChoice || meatSelections.every(selection => selection !== '');
    const isSauceValid = !requiredSauceChoice || (sauceSelections[0] && sauceSelections[0] !== '');
    setIsConfirmDisabled(!(isMeatValid && isSauceValid));
  }, [meatSelections, sauceSelections, requiresMeatChoice, requiredSauceChoice]);

  const handleMeatSelectionChange = (index: number, meat: string) => {
    const newSelections = [...meatSelections];
    newSelections[index] = meat;
    setMeatSelections(newSelections);
  };

  const handleSauceSelectionChange = (sauce: string) => {
    setSauceSelections([sauce]);
  };

  const handleConfirm = () => {
    const cartItem: CartItem = {
      // Créez un objet CartItem avec les propriétés requises
      title: item.title,
      price: item.price, // Vous devrez peut-être calculer le prix en fonction des sélections
      meatSelections: meatSelections,
      sauceSelections: sauceSelections,
      descript: '',
      img: item.img,
      tag: ''
    };
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
    onClose(meatSelections, sauceSelections);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
        <h2 className="text-lg font-semibold mb-4">Sélectionnez vos options pour {title}</h2>
        
        {requiresMeatChoice && meatOptions && (
          <div className="mb-4">
            <h3 className="font-semibold">Choix de la viande:</h3>
            {[...Array(repeatCount)].map((_, index) => (
              <select
                key={index}
                value={meatSelections[index]}
                onChange={(e) => handleMeatSelectionChange(index, e.target.value)}
                className="border rounded-md px-2 py-1 w-full mt-2"
              >
                <option value="">Veuillez choisir votre viande</option>
                {meatOptions.map((meat, i) => (
                  <option key={i} value={meat}>{meat}</option>
                ))}
              </select>
            ))}
          </div>
        )}

        {requiredSauceChoice && sauceOptions && (
          <div className="mb-4">
            <h3 className="font-semibold">Choix de la sauce:</h3>
            <select
              value={sauceSelections[0] || ''}
              onChange={(e) => handleSauceSelectionChange(e.target.value)}
              className="border rounded-md px-2 py-1 w-full"
            >
              <option value="">Veuillez choisir votre sauce</option>
              {sauceOptions.map((sauce, index) => (
                <option key={index} value={sauce}>{sauce}</option>
              ))}
            </select>
          </div>
        )}

        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Annuler
          </button>
          <button
            onClick={handleConfirm}
            disabled={isConfirmDisabled}
            className={`px-4 py-2 rounded-lg text-white ${isConfirmDisabled ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
