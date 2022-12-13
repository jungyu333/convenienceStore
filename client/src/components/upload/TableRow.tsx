import React from 'react';
import styled from 'styled-components';
import { ITableRowProps } from '../../@types/upload';
import TableRowCell from './TableRowCell';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function TableRow({ products }: ITableRowProps) {
  return (
    <Wrapper>
      {products.map((product, index) => (
        <div key={index}>
          <TableRowCell product={product} />
        </div>
      ))}
    </Wrapper>
  );
}

export default TableRow;
