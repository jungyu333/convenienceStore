import { Container, TableContainer } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadCarts } from '../action/cart';
import TotalBox from '../components/cart/TotalBox';
import TableHeader from '../components/common/TableHeader';
import TableRow from '../components/common/TableRow';
import uesGetTotal from '../hooks/useGetTotal';
import { setTotal } from '../reducer/cart';
import { RootState, useAppDispatch } from '../store/store';

const Wrapper = styled(Container)`
  margin-top: 10rem;
`;

const CustomTableContainer = styled(TableContainer)`
  box-shadow: 3px 2px 2px ${({ theme }) => theme.colors.lightgray};
  border: none;
`;

function Cart() {
  const dispatch = useAppDispatch();
  const { carts, total } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(loadCarts());
  }, [dispatch]);

  useEffect(() => {
    if (carts) {
      dispatch(setTotal(uesGetTotal(carts!)));
    }
  }, [carts, dispatch]);
  return (
    <Wrapper>
      <CustomTableContainer>
        <TableHeader isCart={true} />
        <TableRow carts={carts!} />
      </CustomTableContainer>
      <TotalBox total={total} />
    </Wrapper>
  );
}

export default Cart;
