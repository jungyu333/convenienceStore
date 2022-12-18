import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAddCartData } from '../@types/cart';
import { ICart } from '../@types/common';

// add cart
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

// carts load
export const loadCarts = createAsyncThunk<ICart[]>(
  'carts/load',
  async (data, thunkApi) => {
    try {
      const response = await axios.get('/api/cart');
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

// cart delete
export const deleteCart = createAsyncThunk<number | string, number>(
  'cart/delete',
  async (data, thunkApi) => {
    try {
      const response = await axios.post('/api/cart/delete', { cartId: data });
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);
