import React from 'react';
import styled from 'styled-components';
import { ITotalBox } from '../../@types/cart';

const Total = styled.div`
  margin-top: 1rem;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & h1 {
    margin-right: 10px;
    font-size: 1.2rem;
  }

  & span {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

function TotalBox({ total }: ITotalBox) {
  return (
    <Total>
      <h1>Total </h1>
      <span>{total}</span>
    </Total>
  );
}

export default TotalBox;
