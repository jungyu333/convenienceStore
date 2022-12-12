import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { uploadImage, uploadProduct } from '../action/product';

interface productState {
  imagePath: string[];
  imageLoading: boolean;
  imageError: string | null;
  uploadProductLoading: boolean;
  uploadProductDone: boolean;
  uploadProductError: string | null;
}

export const initialState: productState = {
  imagePath: [],
  imageLoading: false,
  imageError: null,
  uploadProductLoading: false,
  uploadProductDone: false,
  uploadProductError: null,
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
    resetProductDone: state => {
      state.uploadProductDone = false;
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
      })
      .addCase(uploadProduct.pending, state => {
        state.uploadProductLoading = true;
        state.uploadProductDone = false;
      })
      .addCase(uploadProduct.fulfilled, (state, action) => {
        state.uploadProductLoading = false;
        state.uploadProductDone = true;
      })
      .addCase(uploadProduct.rejected, (state, action) => {
        state.uploadProductLoading = false;
        state.uploadProductDone = false;
        state.uploadProductError = action.payload as string;
      });
  },
});

export const { deleteImage, resetImages, resetProductDone } =
  productSlice.actions;
export default productSlice;
