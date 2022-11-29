import React from 'react';
import styled from 'styled-components';
import { IInputProps } from '../../@types/login';

const LogInInput = styled.input`
  padding: 10px 5px;
  padding-bottom: 5px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
  font-size: 1.2rem;
  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;

const Error = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.8rem;
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

function Input({ type, label, register, error }: IInputProps) {
  return (
    <>
      <label>{label}</label>
      <LogInInput autoComplete="off" type={type} {...register} />
      <Error>{error?.message}</Error>
    </>
  );
}

export default Input;
