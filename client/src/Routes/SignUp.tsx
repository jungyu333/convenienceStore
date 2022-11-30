import { Avatar, Container } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ISignUpData } from '../@types/signup';
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

const SignUpForm = styled.form`
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

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CustomAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  box-shadow: 2px 2px 2px gray;
`;

const SignUpInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const AvatarButton = styled.div`
  cursor: pointer;
  padding: 8px 10px;
  border: 1px solid gray;
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
`;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpData>();
  const onSubmitSignUp = (data: ISignUpData) => {
    console.log(data);
  };
  return (
    <Wrapper>
      <SignUpForm onSubmit={handleSubmit(onSubmitSignUp)}>
        <AvatarContainer>
          <CustomAvatar src="/broken-image.jpg" />
          <AvatarButton>Image</AvatarButton>
        </AvatarContainer>

        <SignUpInputContainer>
          <Input
            type="email"
            label="Email ID"
            error={errors.email}
            isAuth={true}
            register={register('email', {
              required: 'Email ID를 입력해주세요',
            })}
          />
          <Input
            type="number"
            label="인증 번호"
            error={errors.auth}
            register={register('auth', {
              required: '인증번호를 입력해주세요',
              minLength: {
                value: 6,
                message: '인증번호는 6자리 입니다',
              },
            })}
          />
          <Input
            type="text"
            label="Nick Name"
            error={errors.nickname}
            register={register('nickname', {
              required: 'nickname을 입력해주세요',
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
          <Input
            type="password"
            label="Password Check"
            error={errors.passwordCheck}
            register={register('passwordCheck', {
              required: 'password를 다시 입력해주세요',
              minLength: {
                value: 10,
                message: '비밀번호는 10자 이상입니다',
              },
            })}
          />
        </SignUpInputContainer>
        <SubmitButton text="Sign Up" />
      </SignUpForm>
    </Wrapper>
  );
}

export default SignUp;
