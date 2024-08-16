import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';

// Types
export type CartItem = {
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

interface CartState {
  cartItems: CartItem[];
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { index: number; newQuantity: number } }
  | { type: 'INITIALIZE_CART'; payload: CartItem[] };

const initialState: CartState = {
  cartItems: [],
};

// Reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    // Ajouter un article au panier
    case 'ADD_TO_CART': {
      const existingItemIndex = state.cartItems.findIndex(
        (item) =>
          item.title === action.payload.title &&
          JSON.stringify(item.meatSelections) === JSON.stringify(action.payload.meatSelections) &&
          JSON.stringify(item.sauceSelections) === JSON.stringify(action.payload.sauceSelections)
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.cartItems];
        updatedItems[existingItemIndex].quantity =
          (updatedItems[existingItemIndex].quantity || 1) + 1;
        return { ...state, cartItems: updatedItems };
      } else {
        return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
      }
    }

    // Supprimer un article du panier
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((_, index) => index !== action.payload),
      };

    // Mettre à jour la quantité d'un article
    case 'UPDATE_QUANTITY': {
      const updatedCartItems = [...state.cartItems];
      if (action.payload.newQuantity <= 0) {
        updatedCartItems.splice(action.payload.index, 1);
      } else {
        updatedCartItems[action.payload.index].quantity = action.payload.newQuantity;
      }
      return { ...state, cartItems: updatedCartItems };
    }

    // Initialiser le panier
    case 'INITIALIZE_CART':
      return { ...state, cartItems: action.payload };

    // Cas par défaut
    default:
      return state;
  }
};

// Context
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ state: initialState, dispatch: () => null });

// Provider
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart items from localStorage when the app initializes
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      dispatch({ type: 'INITIALIZE_CART', payload: JSON.parse(storedCartItems) });
    }
  }, []);

  // Save cart items to localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
