import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type CartItem = {
  title: string;
  price: string;
  quantity?: number;
  meatSelections?: string[];
  sauceSelections?: string[];
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, newQuantity: number) => void;
  calculateTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addToCart = (newItem: CartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.title === newItem.title &&
          JSON.stringify(item.meatSelections) === JSON.stringify(newItem.meatSelections) &&
          JSON.stringify(item.sauceSelections) === JSON.stringify(newItem.sauceSelections)
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity = (updatedItems[existingItemIndex].quantity || 1) + 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (index: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      return updatedItems;
    });
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (newQuantity <= 0) {
        updatedItems.splice(index, 1);
      } else {
        updatedItems[index].quantity = newQuantity;
      }
      return updatedItems;
    });
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemTotal = (parseFloat(item.price) || 0) * (item.quantity || 1);
      return total + itemTotal;
    }, 0);
  };

  // Save cart items to localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, calculateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
