import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ICart } from '../@types/common';
import { addCart, deleteCart, loadCarts } from '../action/cart';

interface cartState {
  addCartLoading: boolean;
  addCartDone: boolean;
  addCartError: string | null;
  loadCartsLoading: boolean;
  loadCartsDone: boolean;
  loadCartsError: string | null;
  deleteCartLoading: boolean;
  deleteCartDone: boolean;
  deleteCartError: string | null;
  total: number;
  carts: ICart[] | null;
}

export const initialState: cartState = {
  addCartLoading: false,
  addCartDone: false,
  addCartError: null,
  loadCartsLoading: false,
  loadCartsDone: false,
  loadCartsError: null,
  deleteCartLoading: false,
  deleteCartDone: false,
  deleteCartError: null,
  total: 0,
  carts: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addCart.pending, state => {
        state.addCartLoading = true;
        state.addCartDone = false;
      })
      .addCase(addCart.fulfilled, state => {
        state.addCartLoading = false;
        state.addCartDone = true;
        toast.success('장바구니에 추가되었습니다.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
          hideProgressBar: true,
        });
      })
      .addCase(addCart.rejected, (state, action) => {
        state.addCartLoading = false;
        state.addCartDone = false;
        state.addCartError = action.payload as string;
        toast.error(state.addCartError, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
          hideProgressBar: true,
        });
      })
      .addCase(loadCarts.pending, state => {
        state.loadCartsLoading = true;
        state.loadCartsDone = false;
      })
      .addCase(loadCarts.fulfilled, (state, action) => {
        state.loadCartsLoading = false;
        state.loadCartsDone = true;
        state.carts = action.payload;
      })
      .addCase(loadCarts.rejected, (state, action) => {
        state.loadCartsLoading = false;
        state.loadCartsDone = false;
        state.loadCartsError = action.payload as string;
      })
      .addCase(deleteCart.pending, state => {
        state.deleteCartLoading = true;
        state.deleteCartDone = false;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.deleteCartLoading = false;
        state.deleteCartDone = true;
        state.carts = state.carts!.filter(cart => cart.id !== action.payload);
      })
      .addCase(deleteCart.rejected, (state, action) => {
        state.deleteCartLoading = false;
        state.deleteCartDone = false;

        state.deleteCartError = action.payload as string;
        toast.error(state.deleteCartError, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
          hideProgressBar: true,
        });
      });
  },
});

export const { setTotal } = cartSlice.actions;
export default cartSlice;
