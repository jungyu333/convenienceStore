import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAddCartData } from '../@types/cart';

// add Cart
export const addCart = createAsyncThunk<string, IAddCartData>(
  'add/cart',
  async (data, thunkApi) => {
    try {
      const response = await axios.post('/api/cart', {
        productId: data.productId,
        quantity: data.quantity,
      });
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);
