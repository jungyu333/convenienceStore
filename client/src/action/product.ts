import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProduct } from '../@types/common';
import { IEditProductStockData } from '../@types/upload';

export const uploadImage = createAsyncThunk<string, FormData>(
  'imageUpLoad',
  async (data, thunkApi) => {
    try {
      const response = await axios.post(`/api/product/image`, data);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const uploadProduct = createAsyncThunk<string, FormData>(
  'product/upload',
  async (data, thunkApi) => {
    try {
      const response = await axios.post('/api/product', data);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const loadProducts = createAsyncThunk<IProduct[]>(
  'products/load',
  async (data, thunkApi) => {
    try {
      const response = await axios.get('/api/product');
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const editProductStock = createAsyncThunk<
  IEditProductStockData,
  IEditProductStockData
>('stock/edit', async (data, thunkApi) => {
  try {
    const response = await axios.post('/api/product/stock', {
      stock: data.stock,
      productId: data.productId,
    });
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});
