import { Container } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { ISignUpData } from '../@types/signup';
import { signUp } from '../action/signUp';
import SubmitButton from '../components/common/SubmitButton';
import Input from '../components/common/Input';
import AvatarInput from '../components/signup/AvatarInput';
import { RootState, useAppDispatch } from '../store/store';

const Wrapper = styled(Container)`
  background-color: ${({ theme }) => theme.colors.gray};
  margin: 0 auto;
  height: 100vh;
  padding: 2rem;
  min-height: 750px;
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

const SignUpInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

function SignUp() {
  const navigation = useNavigate();
  const { avatarPath, authDone, overrap } = useSelector(
    (state: RootState) => state.user,
  );
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ISignUpData>();

  const onValid = (data: ISignUpData) => {
    if (!overrap || !authDone) {
      toast.error('이메일 인증을 해주세요', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: true,
      });
    } else if (getValues('password') !== getValues('passwordCheck')) {
      toast.error('비밀번호를 체크해주세요', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: true,
      });
    } else {
      if (avatarPath) {
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('nickname', data.nickname);
        formData.append('avatar', avatarPath);
        dispatch(signUp(formData)).then(() => {
          navigation('/login', { replace: true });
        });
      } else {
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('nickname', data.nickname);
        dispatch(signUp(formData)).then(() => {
          navigation('/login', { replace: true });
        });
      }
    }
  };

  return (
    <Wrapper>
      <SignUpForm
        encType="multipart/form-data"
        onSubmit={handleSubmit(onValid)}
      >
        <AvatarInput />

        <SignUpInputContainer>
          <Input
            type="email"
            label="Email ID"
            error={errors.email}
            isEmail={true}
            getValues={getValues}
            register={register('email', {
              required: 'Email ID를 입력해주세요',
            })}
          />
          <Input
            type="number"
            label="인증 번호"
            error={errors.auth}
            isAuth={true}
            getValues={getValues}
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
