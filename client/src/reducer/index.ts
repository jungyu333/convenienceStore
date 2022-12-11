import { combineReducers } from '@reduxjs/toolkit';
import signUpSlice from './signUp';
import userSlice from './user';
import productSlice from './product';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  signUp: signUpSlice.reducer,
  product: productSlice.reducer,
});

export default rootReducer;
