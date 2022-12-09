import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;

  & div {
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.orange};
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkOrange};
    }
  }
`;

function UpLoadButton() {
  return (
    <Wrapper>
      <div>추가하기</div>
    </Wrapper>
  );
}

export default UpLoadButton;
