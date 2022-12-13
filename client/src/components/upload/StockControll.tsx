import React from 'react';
import styled from 'styled-components';
import { IStockControllProps } from '../../@types/upload';

const StockContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 100%;
  & div {
    display: flex;
    align-items: center;
    & span {
      width: 15px;
      margin: 0 5px;
      cursor: pointer;
      & svg {
        fill: ${({ theme }) => theme.colors.lightgray};
        &:hover {
          fill: ${({ theme }) => theme.colors.gray};
        }
      }
    }
  }

  & div:last-child {
    width: 100%;
    height: 15px;
    margin-top: 5px;
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
    padding: 1px 3px;
    border-radius: 10px;
    & svg {
      width: 100%;
      height: 100%;
      cursor: pointer;
      fill: ${({ theme }) => theme.colors.gray};
      &:hover {
        fill: ${({ theme }) => theme.colors.green};
      }
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: 30%;
  }
`;

function StockControll({ stock, setIsOpen }: IStockControllProps) {
  const onClickStockSave = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <StockContainer>
      <div>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </span>
        <div>{stock}</div>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </span>
      </div>

      <div>
        <svg
          onClick={onClickStockSave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      </div>
    </StockContainer>
  );
}

export default StockControll;
