import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/store';

const Wrapper = styled.div`
  height: 9vh;
  width: 100%;
  margin-top: 20px;
  display: flex;
  overflow-x: auto;
  & img {
    margin-right: 10px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.gray};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const DeleteButton = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  &:hover {
    border-color: ${({ theme }) => theme.colors.red};
  }
  & svg {
    width: 90%;
    height: 90%;
    fill: ${({ theme }) => theme.colors.gray};
    &:hover {
      fill: ${({ theme }) => theme.colors.red};
    }
  }
`;

function ProductPreview() {
  const { imagePath } = useSelector((state: RootState) => state.product);

  return (
    <>
      {imagePath.length > 0 ? (
        <Wrapper>
          {imagePath.map((image, index) => (
            <ImageContainer>
              <img
                key={index}
                src={`${process.env.REACT_APP_SERVER_URL}/${image}`}
              />
              <DeleteButton>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
              </DeleteButton>
            </ImageContainer>
          ))}
        </Wrapper>
      ) : null}
    </>
  );
}

export default ProductPreview;
