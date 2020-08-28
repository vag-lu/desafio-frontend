import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';

export const Reducers = combineReducers({
  cartState: cartReducer,
});