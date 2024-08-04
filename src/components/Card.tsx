import React from 'react';

type listmenu = {
  title: string;
  descript: string;
  img: string;
  price: string;
  addToCart: (item: { title: string; descript: string; img: string; price: string }) => void;
};

export const Card: React.FC<listmenu> = ({ title, descript, img, price, addToCart }) => {
  const handleAddToCart = () => {
    const item = { title, descript, img, price };
    console.log('Adding to cart:', item); // Debugging line
    addToCart(item);
  };

  return (
    <>
      <article className="max-w-xs m-9 rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-200">
        <div>
          <div className="flex items-end overflow-hidden rounded-xl">
            <img src={img} alt="" />
          </div>

          <div className="mt-1 p-2">
            <h2 className="text-blue-00 uppercase font-bold">{title}</h2>
            <p className="mt-1 text-sm text-slate-400">{descript}</p>

            <div className="mt-3 flex items-end justify-between">
              <p className="text-lg font-bold text-blue-900">{price}</p>

              <div className="flex items-center space-x-1.5 rounded-lg bg-blue-950 px-4 py-1.5 text-white duration-100 hover:bg-blue-900">
                <button onClick={handleAddToCart} className="text-sm">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
