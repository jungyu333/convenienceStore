import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled(Container)`
  margin: 0 auto;
  margin-top: 5rem;
`;

const Image = styled.div`
  width: 100%;
  height: 30vh;
  min-height: 300px;
  background-color: gray;
`;

const InfoContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  & h1 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  & div {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & span {
      font-size: 0.8rem;
    }
  }

  & div:nth-child(odd) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & p {
      margin-top: 10px;
      width: 100%;
      height: 200px;
      min-height: 200px;
      background-color: ${({ theme }) => theme.colors.lightgray};
      border-radius: 10px;
      padding: 10px;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  & button {
    background-color: ${({ theme }) => theme.colors.orange};
    border: none;
    padding: 5px 10px;
    border-radius: 10px;
    font-family: COOKIE;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.lightgray};
    }
  }
`;

const QuantityContainer = styled.span`
  display: flex;
  width: min-content;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  font-size: 1.2rem;
  & div {
    font-size: 1rem;
    font-weight: 300;
    margin: 0 5px;
    border: 2px solid ${({ theme }) => theme.colors.gray};
    background-color: transparent;
    padding: 5px 8px;
  }
  & svg {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.gray};
    &:hover {
      fill: ${({ theme }) => theme.colors.black};
      border-color: ${({ theme }) => theme.colors.black};
    }
  }
`;

function ProductDetail() {
  return (
    <Wrapper>
      <Image />
      <InfoContainer>
        <h1>name</h1>
        <div>
          <h2>가격</h2>
          <span>1200원</span>
        </div>
        <div>
          <h2>상품설명</h2>
          <p>설명</p>
        </div>
        <div>
          <QuantityContainer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
            <div>5</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </QuantityContainer>
          <button>장바구니에 담기</button>
        </div>
      </InfoContainer>
    </Wrapper>
  );
}

export default ProductDetail;
