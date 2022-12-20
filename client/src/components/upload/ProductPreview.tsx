import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/store';
import DeleteImageButton from './DeleteImageButton';

const Wrapper = styled.div`
  height: 9vh;
  width: 100%;
  margin-top: 20px;
  display: flex;
  overflow-x: auto;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  min-width: 70px;
  min-height: 70px;
  margin-right: 10px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.gray};
  }
`;

function ProductPreview() {
  const { imagePath } = useSelector((state: RootState) => state.product);

  return (
    <>
      {imagePath.length > 0 ? (
        <Wrapper>
          {imagePath.map((image, index) => (
            <ImageContainer key={index}>
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/${image}`}
                alt="image"
              />
              <DeleteImageButton image={image} />
            </ImageContainer>
          ))}
        </Wrapper>
      ) : null}
    </>
  );
}

export default ProductPreview;
