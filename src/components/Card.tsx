import React, { useState } from 'react';

type listmenu = {
  title: string;
  descript: string;
  img: string;
  price: string;
  requiresMeatChoice?: boolean;
  requiredSauceChoice?: boolean;
  meatChoiceCount?: number;
  meatOptions?: string[];
  sauceOptions?: string[];
  tag: string;
  meatSelections?: string[] ;
  sauceSelections?: string[];
};
type propsCard = {
  item: listmenu;
  addToCart: (meatSelections: string[], sauceSelections: string[]) => void;
};

export const Card: React.FC<propsCard> = ({ item, addToCart }) => {
  const { title, descript, img, price, requiresMeatChoice, requiredSauceChoice, meatOptions, sauceOptions, meatChoiceCount } = item;
  const [meatSelections, setMeatSelections] = useState<string[]>(meatChoiceCount ? Array(meatChoiceCount).fill('') : []);
  const [sauceSelection, setSauceSelection] = useState<string[]>([]);

  const handleMeatSelectionChange = (index: number, meat: string) => {
    const newSelections = [...meatSelections];
    newSelections[index] = meat;
    setMeatSelections(newSelections);
  };

  const handleAddToCart = () => {
    addToCart(meatSelections, sauceSelection);
  };

  return (
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
            <div className="flex flex-col space-y-2">
              {requiresMeatChoice && meatOptions && (
                <div className="flex flex-col space-y-2">
                  <h3 className="font-semibold">Choix de la viande:</h3>
                  {[...Array(meatChoiceCount)].map((_, index) => (
                    <select
                      key={index}
                      value={meatSelections[index]}
                      onChange={(e) => handleMeatSelectionChange(index, e.target.value)}
                      className="border rounded-md px-2 py-1"
                    >
                      <option value="">Veuillez choisir votre viande</option>
                      {meatOptions.map((meat:string, i:number) => (
                        <option key={i} value={meat}>{meat}</option>
                      ))}
                    </select>
                  ))}
                </div>
              )}

              {requiredSauceChoice && sauceOptions && (
                <div className="flex flex-col space-y-2">
                  <h3 className="font-semibold">Choix de la sauce:</h3>
                  <select
                    value={sauceSelection[0] || ''}
                    onChange={(e) => setSauceSelection([e.target.value])}
                    className="border rounded-md px-2 py-1"
                  >
                    <option value="">Veuillez choisir votre sauce</option>
                    {sauceOptions.map((sauce:string, index:number) => (
                      <option key={index} value={sauce}>{sauce}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-950 px-4 py-1.5 text-white duration-100 hover:bg-blue-900">
              <button onClick={handleAddToCart} className="text-sm">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
