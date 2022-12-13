import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ITableRowCellProps } from '../../@types/upload';
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
`;

function TableRowCell({ product }: ITableRowCellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const onClickEdit = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <Wrapper>
      <TableCell>
        <Avatar
          src={`${process.env.REACT_APP_SERVER_URL}/${product.imageUrl[0].src}`}
        />
      </TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell>
        {!isOpen ? (
          <EditContainer>
            <svg
              onClick={onClickEdit}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
            </svg>
          </EditContainer>
        ) : (
          <StockControll setIsOpen={setIsOpen} stock={product.stock} />
        )}
      </TableCell>
    </Wrapper>
  );
}

export default TableRowCell;
