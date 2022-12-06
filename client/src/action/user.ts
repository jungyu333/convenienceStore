import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IEmailAuthData } from '../@types/signup';
import { ILogInData, IMyInfo } from '../@types/login';

//email 인증
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

//email 중복체크
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

//login
export const userLogIn = createAsyncThunk<IMyInfo, ILogInData>(
  'user/login',
  async (data, thunkApi) => {
    try {
      const response = await axios.post('/api/user/login', {
        email: data.email,
        password: data.password,
      });
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

//logout
export const userLogOut = createAsyncThunk(
  'user/logout',
  async (data, thunkApi) => {
    try {
      const response = await axios.post('/api/user/logout');
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

//myinfo load
export const loadMyInfo = createAsyncThunk<IMyInfo>(
  'user/myinfo',
  async (data, thunkApi) => {
    try {
      const response = await axios.get('/api/user');
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

//admin login
export const adminLogIn = createAsyncThunk<IMyInfo, ILogInData>(
  'admin/login',
  async (data, thunkApi) => {
    try {
      const response = await axios.post('/api/user/admin', {
        email: data.email,
        password: data.password,
      });
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);
