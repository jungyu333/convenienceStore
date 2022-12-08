import { TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CustomTableCell = styled(TableCell)`
  background-color: ${({ theme }) => theme.colors.darkOrange};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
`;

function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <CustomTableCell>Image</CustomTableCell>
        <CustomTableCell align="right">Name</CustomTableCell>
        <CustomTableCell align="right">Price</CustomTableCell>
        <CustomTableCell align="right">Stock</CustomTableCell>
      </TableRow>
    </TableHead>
  );
}
export default TableHeader;
