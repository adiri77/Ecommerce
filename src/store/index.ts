// Global state management for E-commerce application using React Context
import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { User, Cart, CartItem, Product, AuthState } from '../types';

// App State Interface
interface AppState {
  auth: AuthState;
  cart: Cart;
  wishlist: Product[];
  recentlyViewed: Product[];
}

// Action Types
type AppAction =
  | { type: 'AUTH_LOGIN'; payload: User }
  | { type: 'AUTH_LOGOUT' }
  | { type: 'AUTH_SET_LOADING'; payload: boolean }
  | { type: 'AUTH_SET_ERROR'; payload: string | null }
  | { type: 'CART_ADD_ITEM'; payload: CartItem }
  | { type: 'CART_REMOVE_ITEM'; payload: string }
  | { type: 'CART_UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CART_CLEAR' }
  | { type: 'CART_APPLY_DISCOUNT'; payload: { code: string; amount: number } }
  | { type: 'WISHLIST_ADD'; payload: Product }
  | { type: 'WISHLIST_REMOVE'; payload: string }
  | { type: 'RECENTLY_VIEWED_ADD'; payload: Product };

// Initial State
const initialState: AppState = {
  auth: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  cart: {
    items: [],
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0,
  },
  wishlist: [],
  recentlyViewed: [],
};

// Helper function to calculate cart totals
const calculateCartTotals = (items: CartItem[]): Omit<Cart, 'items'> => {
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const shipping = subtotal > 50 ? 0 : 9.99; // Free shipping over $50
  const total = subtotal + tax + shipping;
  
  return { subtotal, tax, shipping, total };
};

// Reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return {
        ...state,
        auth: {
          user: action.payload,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        },
      };

    case 'AUTH_LOGOUT':
      return {
        ...state,
        auth: {
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        },
        cart: initialState.cart, // Clear cart on logout
      };

    case 'AUTH_SET_LOADING':
      return {
        ...state,
        auth: { ...state.auth, isLoading: action.payload },
      };

    case 'AUTH_SET_ERROR':
      return {
        ...state,
        auth: { ...state.auth, error: action.payload, isLoading: false },
      };

    case 'CART_ADD_ITEM': {
      const existingItemIndex = state.cart.items.findIndex(
        item => item.product.id === action.payload.product.id
      );

      let newItems: CartItem[];
      if (existingItemIndex >= 0) {
        newItems = state.cart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.cart.items, action.payload];
      }

      const totals = calculateCartTotals(newItems);
      return {
        ...state,
        cart: { ...state.cart, items: newItems, ...totals },
      };
    }

    case 'CART_REMOVE_ITEM': {
      const newItems = state.cart.items.filter(item => item.id !== action.payload);
      const totals = calculateCartTotals(newItems);
      return {
        ...state,
        cart: { ...state.cart, items: newItems, ...totals },
      };
    }

    case 'CART_UPDATE_QUANTITY': {
      const newItems = state.cart.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);

      const totals = calculateCartTotals(newItems);
      return {
        ...state,
        cart: { ...state.cart, items: newItems, ...totals },
      };
    }

    case 'CART_CLEAR':
      return {
        ...state,
        cart: initialState.cart,
      };

    case 'CART_APPLY_DISCOUNT':
      return {
        ...state,
        cart: {
          ...state.cart,
          discountCode: action.payload.code,
          discountAmount: action.payload.amount,
          total: state.cart.total - action.payload.amount,
        },
      };

    case 'WISHLIST_ADD': {
      const isAlreadyInWishlist = state.wishlist.some(item => item.id === action.payload.id);
      if (isAlreadyInWishlist) return state;
      
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    }

    case 'WISHLIST_REMOVE':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload),
      };

    case 'RECENTLY_VIEWED_ADD': {
      const filtered = state.recentlyViewed.filter(item => item.id !== action.payload.id);
      const newRecentlyViewed = [action.payload, ...filtered].slice(0, 10); // Keep only 10 items
      
      return {
        ...state,
        recentlyViewed: newRecentlyViewed,
      };
    }

    default:
      return state;
  }
};

// Context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

// Provider Component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return React.createElement(
    AppContext.Provider,
    { value: { state, dispatch } },
    children
  );
};

// Custom Hook
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

// Action Creators
export const authActions = {
  login: (user: User) => ({ type: 'AUTH_LOGIN' as const, payload: user }),
  logout: () => ({ type: 'AUTH_LOGOUT' as const }),
  setLoading: (loading: boolean) => ({ type: 'AUTH_SET_LOADING' as const, payload: loading }),
  setError: (error: string | null) => ({ type: 'AUTH_SET_ERROR' as const, payload: error }),
};

export const cartActions = {
  addItem: (item: CartItem) => ({ type: 'CART_ADD_ITEM' as const, payload: item }),
  removeItem: (id: string) => ({ type: 'CART_REMOVE_ITEM' as const, payload: id }),
  updateQuantity: (id: string, quantity: number) => ({ 
    type: 'CART_UPDATE_QUANTITY' as const, 
    payload: { id, quantity } 
  }),
  clear: () => ({ type: 'CART_CLEAR' as const }),
  applyDiscount: (code: string, amount: number) => ({ 
    type: 'CART_APPLY_DISCOUNT' as const, 
    payload: { code, amount } 
  }),
};

export const wishlistActions = {
  add: (product: Product) => ({ type: 'WISHLIST_ADD' as const, payload: product }),
  remove: (id: string) => ({ type: 'WISHLIST_REMOVE' as const, payload: id }),
};

export const recentlyViewedActions = {
  add: (product: Product) => ({ type: 'RECENTLY_VIEWED_ADD' as const, payload: product }),
};
