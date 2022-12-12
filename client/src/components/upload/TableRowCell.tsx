import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { ITableRowCellProps } from '../../@types/upload';

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

function TableRowCell({ product }: ITableRowCellProps) {
  return (
    <Wrapper>
      <TableCell>
        <Avatar src={`${process.env.REACT_APP_SERVER_URL}/${product.imageUrl[0].src}`} />
      </TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell>+</TableCell>
    </Wrapper>
  );
}

export default TableRowCell;
