import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../store/store';
import { Container } from '@mui/material';
import styled from 'styled-components';
import ProductCard from '../components/home/ProductCard';
import { loadProducts } from '../action/product';
import { useSelector } from 'react-redux';
import { loadMyInfo } from '../action/user';

const Wrapper = styled(Container)`
  margin: 0 auto;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: 1.8rem;
  margin: 20px;
  width: 100%;
  text-align: left;
`;

const MainContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  flex-direction: column;
  justify-items: center;
  @media ${({ theme }) => theme.device.smallTablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function Home() {
  const dispatch = useAppDispatch();
  const { me } = useSelector((state: RootState) => state.user);
  const { products } = useSelector((state: RootState) => state.product);
  useEffect(() => {
    if (!me) {
      dispatch(loadMyInfo());
    }
    dispatch(loadProducts());
  }, [dispatch, me]);
  return (
    <Wrapper>
      <MainTitle>상품 List</MainTitle>
      <MainContainer>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </MainContainer>
    </Wrapper>
  );
}

export default Home;
