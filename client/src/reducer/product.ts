import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
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
  reducers: {
    deleteImage: (state, action) => {
      state.imagePath = state.imagePath.filter(
        image => image !== action.payload,
      );
    },
    resetImages: state => {
      state.imagePath = [];
    },
  },
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
        toast.error('로그인이 필요합니다.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
          hideProgressBar: true,
        });
      });
  },
});

export const { deleteImage, resetImages } = productSlice.actions;
export default productSlice;
