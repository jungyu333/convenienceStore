import { combineReducers } from '@reduxjs/toolkit';
import signUpSlice from './signUp';
import userSlice from './user';
import productSlice from './product';
import cartSlice from './cart';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  signUp: signUpSlice.reducer,
  product: productSlice.reducer,
  cart: cartSlice.reducer,
});

export default rootReducer;
