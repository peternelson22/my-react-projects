import { createContext, useEffect, useReducer } from 'react';
import { initialState, reducer } from '../reducer';
import {
  CLEAR_CART,
  DECREASE_CART,
  DISPLAY_ITEMS,
  INCREASE_CART,
  LOADING,
  REMOVE_CART,
} from '../reducer/actions';
import { getTotals } from '../utils';

export const AppContext = createContext();

const url = 'https://www.course-api.com/react-useReducer-cart-project';

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART, payload: { id } });
  };
  const increaseItem = (id) => {
    dispatch({ type: INCREASE_CART, payload: { id } });
  };
  const decreaseItem = (id) => {
    dispatch({ type: DECREASE_CART, payload: { id } });
  };

  const fetchData = async () => {
    try {
      dispatch({ type: LOADING });
      const res = await fetch(url);
      const cart = await res.json();
      dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
