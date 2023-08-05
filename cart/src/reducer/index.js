import {
  CLEAR_CART,
  DECREASE_CART,
  INCREASE_CART,
  REMOVE_CART,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';

export const initialState = {
  cart: new Map(),
  loading: false,
};

export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE_CART) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE_CART) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(action.payload.id, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE_CART) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    if (item.amount === 1) {
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };
    }
    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(action.payload.id, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type == DISPLAY_ITEMS) {
    const newItems = new Map(
      action.payload.cart.map((item) => [item.id, item])
    );
    return { ...state, loading: false, cart: newItems };
  }
  throw new Error(`no matching action type: ${action.type}`);
};
