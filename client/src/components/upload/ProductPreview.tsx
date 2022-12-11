import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/store';

const Wrapper = styled.div`
  height: 8vh;
  width: 100%;
  margin-top: 20px;
  display: flex;
  overflow-x: auto;
  & img {
    margin-right: 10px;
    width: 80px;
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
            <img
              key={index}
              src={`${process.env.REACT_APP_SERVER_URL}/${image}`}
            />
          ))}
        </Wrapper>
      ) : null}
    </>
  );
}

export default ProductPreview;
