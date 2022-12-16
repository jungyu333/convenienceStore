import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addCart } from '../action/cart';

interface cartState {
  addCartLoading: boolean;
  addCartDone: boolean;
  addCartError: string | null;
}

export const initialState: cartState = {
  addCartLoading: false,
  addCartDone: false,
  addCartError: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
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
      });
  },
});

export default cartSlice;
