import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//회원가입
export const signUp = createAsyncThunk<any, FormData>(
  'singUp',
  async (data, thunkApi) => {
    try {
      const response = await axios.post('/api/signUp', {
        email: data.get('email'),
        password: data.get('password'),
        nickname: data.get('nickname'),
        avatar: data.get('avatar'),
      });
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

//아바타 업로드
export const uploadAvatar = createAsyncThunk<string, FormData>(
  'uploadAvatar',
  async (data, thunkApi) => {
    try {
      const response = await axios.post('/api/signUp/avatar', data);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);
