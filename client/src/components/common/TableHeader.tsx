import React from 'react';
import styled from 'styled-components';
import { ITableHeaderProps } from '../../@types/common';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkOrange};
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
`;

const TableCell = styled.div`
  font-family: inherit;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TableHeader({ isCart }: ITableHeaderProps) {
  return (
    <Wrapper>
      <TableCell>Image</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Price</TableCell>
      <TableCell>{isCart ? '수량' : 'Stock'}</TableCell>
      <TableCell />
    </Wrapper>
  );
}
export default TableHeader;
