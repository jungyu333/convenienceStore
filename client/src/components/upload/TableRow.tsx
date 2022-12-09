import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import TableRowCell from './TableRowCell';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function TableRow() {
  return (
    <Wrapper>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <div key={index}>
          <TableRowCell />
        </div>
      ))}
    </Wrapper>
  );
}

export default TableRow;
