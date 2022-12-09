import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

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

function TableRowCell() {
  return (
    <Wrapper>
      <TableCell>
        <Avatar src="/static/images/avatar/3.jpg" />
      </TableCell>
      <TableCell>컵라면</TableCell>
      <TableCell>12</TableCell>
      <TableCell>133</TableCell>
      <TableCell>+</TableCell>
    </Wrapper>
  );
}

export default TableRowCell;
