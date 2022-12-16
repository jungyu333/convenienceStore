import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ITableRowCellProps } from '../../@types/common';
import { deleteProduct } from '../../action/product';
import { useAppDispatch } from '../../store/store';
import StockControll from './StockControll';

const TableCell = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

const EditContainer = styled.div`
  width: 70%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    cursor: pointer;
    width: 100%;
    height: 80%;
    fill: ${({ theme }) => theme.colors.lightgray};
    &:hover {
      fill: ${({ theme }) => theme.colors.gray};
    }
  }

  & svg:last-child {
    &:hover {
      fill: ${({ theme }) => theme.colors.red};
    }
  }
`;

function TableRowCell({ product, cart }: ITableRowCellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const onClickEdit = () => {
    setIsOpen(prev => !prev);
  };

  const onClickDelete = () => {
    dispatch(deleteProduct({ id: product!.id }));
  };
  return (
    <Wrapper>
      <TableCell>
        <Avatar
          src={`${process.env.REACT_APP_SERVER_URL}/${
            product ? product?.imageUrl[0].src : cart?.product.imageUrl[0].src
          }`}
        />
      </TableCell>
      <TableCell>{product ? product?.name : cart?.product.name}</TableCell>
      <TableCell>{product ? product?.price : cart?.product.price}</TableCell>
      <TableCell>{product ? product?.stock : cart?.quantity}</TableCell>
      <TableCell>
        {cart ? (
          <>
            <EditContainer>
              <svg
                onClick={onClickDelete}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>
            </EditContainer>
          </>
        ) : (
          <>
            {!isOpen ? (
              <EditContainer>
                <svg
                  onClick={onClickEdit}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                </svg>
                <svg
                  onClick={onClickDelete}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
              </EditContainer>
            ) : (
              <StockControll
                productId={product!.id}
                setIsOpen={setIsOpen}
                stock={product!.stock}
              />
            )}
          </>
        )}
      </TableCell>
    </Wrapper>
  );
}

export default TableRowCell;
