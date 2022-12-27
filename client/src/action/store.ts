import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IStorePosition } from '../@types/store';

// load store position
export const loadStorePosition = createAsyncThunk<IStorePosition>(
  'store/load',
  async (data, thunkApi) => {
    try {
      const response = await axios.get('/api/store');
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);
