import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { Categories } from "../components/Categories";
// import Basket from "../components/Basket";
import Modal from "../components/Modal";
import { listmenuData } from "../data/listmenuData";

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
  meatSelections?: string[];
  sauceSelections?: string[];
  quantity?: number;
  softOptions?: string[];
  glaceOptions?: string[];
  tiramisuOption?: string[];
};

export function Menu() {
  const [filteredMenu, setFilteredMenu] = useState<listmenu[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Pates");
  const [cartItems, setCartItems] = useState<listmenu[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<listmenu | null>(null);
  // const [isBasketOpen, setIsBasketOpen] = useState(false);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cart items to localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // const removeFromCart = (index: number) => {
  //   setCartItems(cartItems.filter((_, i) => i !== index));
  // };

  // const toggleBasket = () => {
  //   setIsBasketOpen(!isBasketOpen);
  // };

  const filterMenuByCategory = (category?: string) => {
    if (!category || category === selectedCategory) {
      setSelectedCategory("Pates");
      setFilteredMenu([]);
    } else {
      setSelectedCategory(category);
      const filteredItems = listmenuData.filter((item) =>
        item.tag.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredMenu(filteredItems);
    }
  };

  const addToCart = (newItem: listmenu, meatSelections: string[], sauceSelections: string[]) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.title === newItem.title &&
          JSON.stringify(item.meatSelections) === JSON.stringify(meatSelections) &&
          JSON.stringify(item.sauceSelections) === JSON.stringify(sauceSelections)
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity = (updatedItems[existingItemIndex].quantity || 1) + 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...newItem, meatSelections, sauceSelections, quantity: 1 }];
      }
    });
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = (item: listmenu) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCancelModal = () => {
    closeModal();
  };

  // const updateQuantity = (index: number, newQuantity: number) => {
  //   setCartItems((prevItems) => {
  //     const updatedItems = [...prevItems];
  //     if (newQuantity <= 0) {
  //       updatedItems.splice(index, 1);
  //     } else {
  //       updatedItems[index].quantity = newQuantity;
  //     }
  //     return updatedItems;
  //   });
  // };

  // const calculateTotalPrice = () => {
  //   return cartItems.reduce((total, item) => {
  //     const itemTotal = (parseFloat(item.price) || 0) * (item.quantity || 1);
  //     return total + itemTotal;
  //   }, 0);
  // };

  return (
    <>
      <div className="mt-4">
        <Categories filteredMenu={filterMenuByCategory} />
      </div>

      <div className="flex flex-wrap justify-around md:flex-row">
        {(filteredMenu.length > 0
          ? filteredMenu
          : listmenuData.filter((menu) => menu.tag.toLowerCase() === selectedCategory.toLowerCase())
        ).map((menu, index) => {
          const newItem = { ...menu, meatSelections: [], sauceSelections: [] };
          return (
            <Card
              key={index}
              item={newItem}
              addToCart={(meatSelections: string[], sauceSelections: string[]) => {
                addToCart(newItem, meatSelections, sauceSelections);
              }}
              openModal={() => handleOpenModal(newItem)}
            />
          );
        })}
      </div>

      {isModalOpen && selectedItem && (
        <Modal
          item={selectedItem}
          onClose={(meatSelections, sauceSelections) => addToCart(selectedItem, meatSelections, sauceSelections)}
          onCancel={handleCancelModal}
        />
      )}
{/* 
      <Basket
              isBasketOpen={isBasketOpen}
              toggleBasket={toggleBasket}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              totalPrice={calculateTotalPrice()} onCancel={undefined}      /> */}
    </>
  );
}
