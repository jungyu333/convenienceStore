import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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