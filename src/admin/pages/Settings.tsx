import React, { useState } from 'react';
import { listmenuData } from '../../data/listmenuData';

const Card: React.FC<{
  imageUrl: string;
  description: string;
  price: string;
  onEdit: () => void;
}> = ({ imageUrl, description, price, onEdit }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-80">
      <img className="w-full h-48 object-cover" src={imageUrl} alt="Product" />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{description}</h3>
        <p className="text-gray-600 mb-4">{price}</p>
        <button
          onClick={onEdit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Modifier
        </button>
      </div>
    </div>
  );
};

const Settings: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Pates');
  const [filteredMenu, setFilteredMenu] = useState(listmenuData);

  const filterMenuByCategory = (category?: string) => {
    if (!category || category === selectedCategory) {
        setSelectedCategory('Pates');
        setFilteredMenu([]);
    } else {
        setSelectedCategory(category);
        const filteredItems = listmenuData.filter(item => item.tag.toLowerCase().includes(category.toLowerCase()));
        setFilteredMenu(filteredItems);
    }
};

  // Obtenez toutes les catégories uniques
  const categories = Array.from(new Set(listmenuData.map(item => item.tag)));

  const handleEdit = (id: number) => {
    console.log('Modifier l\'élément avec l\'ID:', id);
    // Implémentez ici la logique pour modifier les détails du produit
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Paramètres des produits</h1>
      
      {/* Boutons de filtrage */}
      <div className="mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => filterMenuByCategory(category)}
            className={`py-2 px-4 mr-4 mb-2 rounded-lg text-white focus:outline-none ${
              category === selectedCategory
                ? 'bg-blue-500'
                : 'bg-gray-500 hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Carte des produits filtrés */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMenu.map((item, index) => (
          <Card
            key={index}
            imageUrl={item.img}
            description={item.descript}
            price={item.price}
            onEdit={() => handleEdit(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Settings;
