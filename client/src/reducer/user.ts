import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { emailAuth, emailOverrap } from '../action/user';

interface userState {
  avatarFile: string | null;
  avatarPath: string | null;
  emailAuthLoading: boolean;
  emailAuthDone: boolean;
  emailAuthError: string | null;
  authNumber: number | null;
  emailOverrapLoading: boolean;
  emailOverrapDone: boolean;
  emailOverrapError: string | null;
  overrap: boolean | null;
  authDone: boolean;
}

export const initialState: userState = {
  avatarFile: null,
  avatarPath: null,
  emailAuthLoading: false,
  emailAuthDone: false,
  emailAuthError: null,
  emailOverrapLoading: false,
  emailOverrapDone: false,
  emailOverrapError: null,
  overrap: null,
  authNumber: null,
  authDone: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAvatar: (state, action) => {
      state.avatarFile = action.payload.file;
      state.avatarPath = action.payload.path;
    },
    resetAvatar: state => {
      state.avatarFile = null;
      state.avatarPath = null;
    },
    setAuth: state => {
      state.authDone = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(emailAuth.pending, state => {
        state.emailAuthLoading = true;
        state.emailAuthDone = false;
        state.emailAuthError = null;
      })
      .addCase(emailAuth.fulfilled, (state, action) => {
        state.emailAuthLoading = false;
        state.emailAuthDone = true;
        state.authNumber = action.payload;
        toast.success('메일로 보내진 인증번호를 확인하세요.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
          hideProgressBar: true,
        });
      })
      .addCase(emailAuth.rejected, (state, action) => {
        state.emailAuthLoading = false;
        state.emailAuthDone = false;
        state.emailAuthError = action.payload as string;
      })
      .addCase(emailOverrap.pending, state => {
        state.emailOverrapLoading = true;
        state.emailOverrapDone = false;
      })
      .addCase(emailOverrap.fulfilled, (state, action) => {
        state.emailAuthLoading = false;
        state.emailOverrapDone = true;
        state.overrap = action.payload;
        state.overrap
          ? toast.success('사용가능한 이메일 입니다.', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1000,
              hideProgressBar: true,
            })
          : toast.error('중복된 이메일 입니다.', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1000,
              hideProgressBar: true,
            });
      })
      .addCase(emailOverrap.rejected, (state, action) => {
        state.emailOverrapLoading = false;
        state.emailOverrapDone = false;
        state.emailOverrapError = action.payload as string;
      });
  },
});

export const { setAvatar, resetAvatar, setAuth } = userSlice.actions;
export default userSlice;
