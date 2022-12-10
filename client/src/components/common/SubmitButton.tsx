import React from 'react';
import styled from 'styled-components';
import { ISubmitButtonProps } from '../../@types/common';

const Button = styled.button`
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
  margin-top: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.orange};
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.lightgray};
  }
`;

function SubmitButton({ text }: ISubmitButtonProps) {
  return <Button>{text}</Button>;
}

export default SubmitButton;
