import { createSlice } from '@reduxjs/toolkit';
import { uploadImage } from '../action/product';

interface productState {
  imagePath: string[];
  imageLoading: boolean;
  imageError: string | null;
}

export const initialState: productState = {
  imagePath: [],
  imageLoading: false,
  imageError: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(uploadImage.pending, state => {
        state.imageLoading = true;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.imageLoading = false;
        state.imagePath!.push(action.payload);
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.imageLoading = false;
        state.imageError = action.payload as string;
      });
  },
});

export default productSlice;
