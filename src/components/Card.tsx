import React, { useState } from 'react';
import Modal from './Modal';

type listmenu = {
  title: string;
  descript: string;
  img: string;
  price: string;
  requiresMeatChoice?: boolean;
  requiredSauceChoice?: boolean;
  repeatCount?: number;
  meatOptions?: string[];
  sauceOptions?: string[];
  tag: string;
};

type propsCard = {
  item: listmenu;
  addToCart: (meatSelections: string[], sauceSelections: string[]) => void;
  openModal: (item: listmenu) => void
};

export const Card: React.FC<propsCard> = ({ item, addToCart }) => {
  const { title, descript, img, price, requiresMeatChoice, requiredSauceChoice,  } = item;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (meatSelections: string[], sauceSelections: string[]) => {
    if ((requiresMeatChoice && meatSelections.length === 0) || (requiredSauceChoice && sauceSelections.length === 0)) {
      return; 
    }
    addToCart(meatSelections, sauceSelections);
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    if (requiresMeatChoice || requiredSauceChoice) {
      setIsModalOpen(true); 
    } else {
      handleAddToCart([], []); 
    }
  };

  const handleModalCancel = () =>{
    setIsModalOpen(false);
  }

  return (
    <>
      <article className="max-w-xs m-9 rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-200">
        <div>
          <div className="flex items-end overflow-hidden rounded-xl">
            <img src={img} alt={title} />
          </div>

          <div className="mt-1 p-2">
            <h2 className="text-blue-900 uppercase font-bold">{title}</h2>
            <p className="mt-1 text-sm text-slate-400">{descript}</p>

            <div className="mt-3 flex flex-col items-start justify-between">
              <p className="text-lg font-bold text-blue-900">{price}</p>

              <div className="flex items-center space-x-1.5 rounded-lg bg-blue-950 px-4 py-1.5 text-white duration-100 hover:bg-blue-900">
                <button onClick={handleOpenModal} className="text-sm">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {isModalOpen && (
        <Modal
          item={item}
          onClose={handleAddToCart}
          onCancel={handleModalCancel}
        />
      )}
    </>
  );
};

export default Card;
