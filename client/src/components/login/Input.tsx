import React from 'react';
import styled from 'styled-components';
import { IInputProps } from '../../@types/login';

const InputItem = styled.input`
  padding: 10px 5px;
  padding-bottom: 5px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
  font-size: 1.2rem;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuthButton = styled.div<{ isAuth: boolean }>`
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px 8px;
  font-size: 0.9rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
  display: ${props => (props.isAuth ? 'flex' : 'none')};
`;

function Input({ type, label, register, error, isAuth }: IInputProps) {
  return (
    <>
      <Header>
        <label>{label}</label>
        <AuthButton isAuth={isAuth!}>인증하기</AuthButton>
      </Header>

      <InputItem autoComplete="off" type={type} {...register} />
      <Error>{error?.message}</Error>
    </>
  );
}

export default Input;
