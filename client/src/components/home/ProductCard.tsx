import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IProductCardProps } from '../../@types/home';

const Wrapper = styled(Card)`
  width: 100%;
  height: 100%;
  & div:first-child {
    transition: 0.3s ease-in-out;
  }
  :hover {
    & div:first-child {
      scale: 1.1;
      transition: 0.3s ease-in-out;
    }
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 90%;
  }
`;

const ProductInfo = styled(CardContent)`
  font-size: 1.1rem;
  text-align: center;
  & h1 {
    font-weight: 300;
    margin: 10px 0;
  }
  & div {
    font-size: 0.9rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const ProductImage = styled(CardMedia)`
  object-fit: cover;
  height: 140px;
`;

function ProductCard({ product }: IProductCardProps) {
  const navigation = useNavigate();
  const onClickProduct = () => {
    navigation(`/product/${product.id}`);
  };
  return (
    <Wrapper>
      <CardActionArea onClick={onClickProduct}>
        <ProductImage
          image={`${process.env.REACT_APP_SERVER_URL}/${product.imageUrl[0].src}`}
        />
        <ProductInfo>
          <h1>{product.name}</h1>
          <div>{product.price}원</div>
        </ProductInfo>
      </CardActionArea>
    </Wrapper>
  );
}

export default ProductCard;
