import { createSlice } from '@reduxjs/toolkit';

interface userState {
  avatarFile: string | null;
  avatarPath: string | null;
}

export const initialState: userState = {
  avatarFile: null,
  avatarPath: null,
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
  },
});

export const { setAvatar, resetAvatar } = userSlice.actions;
export default userSlice;
