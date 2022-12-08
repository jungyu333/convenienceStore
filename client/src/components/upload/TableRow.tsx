import { Avatar, TableBody, TableCell } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CustomTableRow = styled(TableRow)`
  background-color: ${({ theme }) => theme.colors.black};
`;

const CustomTableCell = styled(TableCell)`
  background-color: ${({ theme }) => theme.colors.white};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
`;

function TableRow() {
  return (
    <TableBody>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <CustomTableRow>
          <CustomTableCell component="th" scope="row">
            <Avatar src="/static/images/avatar/3.jpg" />
          </CustomTableCell>
          <CustomTableCell align="right">컵라면</CustomTableCell>
          <CustomTableCell align="right">12</CustomTableCell>
          <CustomTableCell align="right">133</CustomTableCell>
        </CustomTableRow>
      ))}
    </TableBody>
  );
}

export default TableRow;
