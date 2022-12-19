import { Container, TableContainer } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { loadCarts } from '../action/cart';
import { loadMyInfo } from '../action/user';
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

const NoContent = styled.div`
  width: 100%;
  min-width: max-content;
  height: 100px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 20px;
  }

  & a {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray};
    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }
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
        {carts && carts.length > 0 ? (
          <TableRow carts={carts} />
        ) : (
          <NoContent>
            <h1>장바구니에 담은 상품이 없습니다.</h1>
            <Link to={'/'}>상품 보러가기</Link>
          </NoContent>
        )}
      </CustomTableContainer>
      <TotalBox total={total} />
    </Wrapper>
  );
}

export default Cart;
