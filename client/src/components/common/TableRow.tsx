import React from 'react';
import styled from 'styled-components';
import { ITableRowProps } from '../../@types/common';

import TableRowCell from './TableRowCell';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function TableRow({ products, carts }: ITableRowProps) {
  return (
    <Wrapper>
      {products ? (
        <>
          {products?.map((product, index) => (
            <div key={index}>
              <TableRowCell product={product} />
            </div>
          ))}
        </>
      ) : (
        <>
          {carts?.map((cart, index) => (
            <div key={index}>
              <TableRowCell cart={cart} />
            </div>
          ))}
        </>
      )}
    </Wrapper>
  );
}

export default TableRow;
