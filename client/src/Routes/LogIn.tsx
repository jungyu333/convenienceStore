import { Container } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ILogInData } from '../@types/login';
import SubmitButton from '../components/common/SubmitButton';
import Input from '../components/login/Input';

const Wrapper = styled(Container)`
  background-color: ${({ theme }) => theme.colors.gray};
  margin: 0 auto;
  height: 100vh;
  padding: 2rem;
  min-height: 900px;
  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    height: 100%;
    min-height: 600px;
    width: 500px;
    border-radius: 10px;
    box-shadow: 4px 4px 4px ${({ theme }) => theme.colors.lightgray};
  }
`;

const LogInForm = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${({ theme }) => theme.device.laptop} {
    height: 70vh;
    width: 90%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  margin-bottom: 2rem;
  letter-spacing: 5px;
  & h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  & span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.lightgray};
  }
`;

const LogInInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const BottomButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.9rem;
  letter-spacing: 2px;

  & a {
    &:hover {
      color: ${({ theme }) => theme.colors.lightgray};
    }
  }
`;

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogInData>();
  const onLogInSubmit = (data: ILogInData) => {
    console.log(data);
  };
  return (
    <Wrapper>
      <LogInForm onSubmit={handleSubmit(onLogInSubmit)}>
        <Header>
          <h1>Log In</h1>
          <span>with your account</span>
        </Header>

        <LogInInputContainer>
          <Input
            type="email"
            label="Email ID"
            error={errors.email}
            register={register('email', {
              required: 'Email ID를 입력해주세요',
            })}
          />
          <Input
            type="password"
            label="Password"
            error={errors.password}
            register={register('password', {
              required: 'Password를 입력해주세요',
              minLength: {
                value: 10,
                message: '비밀번호는 10자 이상입니다',
              },
            })}
          />
        </LogInInputContainer>
        <BottomButtonContainer>
          <Link to="/">관리자 계정으로 로그인</Link>
          <Link to={'/signup'}>계정이 없으신가요?</Link>
        </BottomButtonContainer>
        <SubmitButton text="Log In" />
      </LogInForm>
    </Wrapper>
  );
}

export default LogIn;
