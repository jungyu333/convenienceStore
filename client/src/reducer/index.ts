import { combineReducers } from '@reduxjs/toolkit';
import signUpSlice from './signUp';
import userSlice from './user';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  signUp: signUpSlice.reducer,
});

export default rootReducer;
