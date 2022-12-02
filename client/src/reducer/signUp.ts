import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { signUp } from '../action/signUp';

interface signUpState {
  signUpLoading: boolean;
  signUpDone: boolean;
  signUpError: string | null;
}

export const initialState: signUpState = {
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.signUpLoading = true;
        state.signUpDone = false;
      })
      .addCase(signUp.fulfilled, state => {
        state.signUpLoading = true;
        state.signUpDone = true;
        toast.success('회원가입이 완료되었습니다.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
          hideProgressBar: true,
        });
      })
      .addCase(signUp.rejected, (state, action) => {
        state.signUpLoading = false;
        state.signUpDone = false;
        state.signUpError = action.payload as string;
      });
  },
});

export default signUpSlice;
