import { createSlice } from '@reduxjs/toolkit';
import { IStorePosition } from '../@types/store';
import { loadStorePosition } from '../action/store';

interface storeState {
  storePosition: IStorePosition | null;
  loadStorePositionError: string | null;
}

export const initialState: storeState = {
  storePosition: null,
  loadStorePositionError: null,
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadStorePosition.pending, () => {})
      .addCase(loadStorePosition.fulfilled, (state, action) => {
        state.storePosition = action.payload;
        state.loadStorePositionError = null;
      })
      .addCase(loadStorePosition.rejected, (state, action) => {
        state.storePosition = null;
        state.loadStorePositionError = action.payload as string;
      });
  },
});

export default storeSlice;
