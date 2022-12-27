import { combineReducers } from '@reduxjs/toolkit';
import signUpSlice from './signUp';
import userSlice from './user';
import productSlice from './product';
import cartSlice from './cart';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storeSlice from './store';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['user', 'signUp', 'product', 'cart', 'store'],
};

const queryPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['me'],
};

const rootReducer = combineReducers({
  user: persistReducer(queryPersistConfig, userSlice.reducer),
  signUp: signUpSlice.reducer,
  product: productSlice.reducer,
  store: storeSlice.reducer,
  cart: cartSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
