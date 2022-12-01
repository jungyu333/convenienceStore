import React from 'react';
import styled from 'styled-components';
import { IInputProps } from '../../@types/login';
import { emailAuth, emailOverrap } from '../../action/user';
import { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { setAuth } from '../../reducer/user';

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

const CheckButton = styled.div`
  cursor: pointer;
  border-bottom: 1px solid gray;
  padding-bottom: 2px;
  font-size: 0.9rem;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const CheckButtonContainer = styled.div<{ isEmail: boolean }>`
  display: flex;
  align-items: center;
  display: ${props => (props.isEmail ? 'flex' : 'none')};
  & div:first-child {
    margin-right: 8px;
  }
`;

const Auth = styled.div<{ isAuth: boolean }>`
  font-size: 0.8rem;
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: 1px solid gray;
  display: ${props => (props.isAuth ? 'flex' : 'none')};
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const AuthCompelete = styled.div<{ isAuth: boolean }>`
  width: 15px;
  height: 15px;
  fill: ${({ theme }) => theme.colors.green};
  display: ${props => (props.isAuth ? 'flex' : 'none')};
`;

function Input({
  type,
  label,
  register,
  error,
  isEmail,
  isAuth,
  getValues,
}: IInputProps) {
  const { emailAuthLoading, authDone, overrap, authNumber } = useSelector(
    (state: RootState) => state.user,
  );
  const dispatch = useAppDispatch();
  const onClickOverrap = () => {
    const email = getValues!('email');
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if (!email) {
      alert('이메일을 입력해주세요');
    } else {
      if (email.match(emailRegEx) === null) {
        alert('올바른 이메일 형식이 아닙니다.');
      } else {
        dispatch(emailOverrap({ email: email }));
      }
    }
  };
  const onClickAuth = () => {
    if (authDone) {
      return;
    }
    if (overrap === null) {
      alert('이메일 중복체크를 해주세요');
      return;
    } else {
      const email = getValues!('email');
      const emailRegEx =
        /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
      if (!email) {
        alert('이메일을 입력해주세요');
      } else {
        if (email.match(emailRegEx) === null) {
          alert('올바른 이메일 형식이 아닙니다.');
        } else {
          dispatch(emailAuth({ email: email }));
        }
      }
    }
  };

  const onClickCheckAuth = () => {
    const authInput = getValues!('auth');
    if (authInput !== '') {
      if (parseInt(authInput) === authNumber) {
        dispatch(setAuth());
      } else {
        alert('인증번호를 다시 확인해주세요');
      }
    }
  };

  return (
    <>
      <Header>
        <label>{label}</label>
        <CheckButtonContainer isEmail={isEmail!}>
          <CheckButton onClick={onClickOverrap}>중복체크</CheckButton>
          <CheckButton onClick={onClickAuth}>
            {emailAuthLoading ? 'Loading...' : '인증하기'}
          </CheckButton>
        </CheckButtonContainer>
        {!authDone ? (
          <Auth isAuth={isAuth!} onClick={onClickCheckAuth}>
            확인
          </Auth>
        ) : (
          <AuthCompelete isAuth={isAuth!}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </AuthCompelete>
        )}
      </Header>

      <InputItem
        autoComplete="off"
        type={type}
        {...register}
        disabled={isAuth && authDone}
      />

      <Error>{error?.message}</Error>
    </>
  );
}

export default Input;
