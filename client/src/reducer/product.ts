import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IProduct } from '../@types/common';
import {
  deleteProduct,
  editProductStock,
  loadProduct,
  loadProducts,
  uploadImage,
  uploadProduct,
} from '../action/product';

interface productState {
  imagePath: string[];
  imageLoading: boolean;
  imageError: string | null;
  uploadProductLoading: boolean;
  uploadProductDone: boolean;
  uploadProductError: string | null;
  loadProductsLoading: boolean;
  loadProductsDone: boolean;
  loadProductsError: string | null;
  editProductLoading: boolean;
  editProductDone: boolean;
  editProductError: string | null;
  deleteProductLoading: boolean;
  deleteProductDone: boolean;
  deleteProductError: string | null;
  loadProductLoading: boolean;
  loadProductDone: boolean;
  loadProductError: string | null;
  product: IProduct | null;
  quantity: number;
  products: IProduct[];
}

export const initialState: productState = {
  imagePath: [],
  imageLoading: false,
  imageError: null,
  uploadProductLoading: false,
  uploadProductDone: false,
  uploadProductError: null,
  loadProductsLoading: false,
  loadProductsDone: false,
  loadProductsError: null,
  editProductLoading: false,
  editProductDone: false,
  editProductError: null,
  deleteProductLoading: false,
  deleteProductDone: false,
  deleteProductError: null,
  loadProductLoading: false,
  loadProductDone: false,
  loadProductError: null,
  quantity: 1,
  product: null,
  products: [],
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
    plusQuantity: state => {
      state.quantity++;
    },
    minusQuantity: state => {
      state.quantity--;
    },
    resetQuantity: state => {
      state.quantity = 1;
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
      })
      .addCase(loadProducts.pending, state => {
        state.loadProductsLoading = true;
        state.loadProductsDone = false;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loadProductsLoading = false;
        state.loadProductsDone = true;
        state.products = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loadProductsLoading = false;
        state.loadProductsDone = false;
        state.loadProductsError = action.payload as string;
      })
      .addCase(editProductStock.pending, state => {
        state.editProductLoading = true;
        state.editProductDone = false;
      })
      .addCase(editProductStock.fulfilled, (state, action) => {
        state.editProductLoading = false;
        state.editProductDone = true;

        const editProduct = state.products.find(
          element => element.id + '' === action.payload.productId + '',
        );
        if (editProduct) {
          editProduct.stock = action.payload.stock;
        }
      })
      .addCase(editProductStock.rejected, (state, action) => {
        state.editProductLoading = false;
        state.editProductDone = false;
        state.editProductError = action.payload as string;
        toast.error(action.payload as string, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
          hideProgressBar: true,
        });
      })
      .addCase(deleteProduct.pending, state => {
        state.deleteProductLoading = true;
        state.deleteProductDone = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.deleteProductLoading = false;
        state.deleteProductDone = true;
        state.products = action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.deleteProductLoading = false;
        state.deleteProductDone = false;
        state.deleteProductError = action.payload as string;
        toast.error(action.payload as string, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
          hideProgressBar: true,
        });
      })
      .addCase(loadProduct.pending, state => {
        state.loadProductLoading = true;
        state.loadProductDone = false;
      })
      .addCase(loadProduct.fulfilled, (state, action) => {
        state.loadProductLoading = false;
        state.loadProductDone = true;
        state.product = action.payload;
        state.quantity = 1;
      })
      .addCase(loadProduct.rejected, (state, action) => {
        state.loadProductLoading = false;
        state.loadProductDone = false;
        state.loadProductError = action.payload as string;
      });
  },
});

export const {
  deleteImage,
  resetImages,
  resetProductDone,
  plusQuantity,
  minusQuantity,
  resetQuantity,
} = productSlice.actions;
export default productSlice;
