import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IEmailAuthData } from '../@types/signup';

export const emailAuth = createAsyncThunk<number, IEmailAuthData>(
  'user/auth',
  async (data, thunkApi) => {
    try {
      const response = await axios.post(`/api/user/auth`, {
        email: data.email,
      });
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const emailOverrap = createAsyncThunk<boolean, IEmailAuthData>(
  'user/overrap',
  async (data, thunkApi) => {
    try {
      const response = await axios.post('/api/user/overrap', {
        email: data.email,
      });
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);
