import { Container } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { ILogInData, ILogInFormProps } from '../../@types/login';
import { adminLogIn, userLogIn } from '../../action/user';
import { useAppDispatch } from '../../store/store';
import Input from '../common/Input';
import SubmitButton from '../common/SubmitButton';
import SocialLogIn from './SocialLogIn';

const Wrapper = styled(Container)`
  background-color: ${({ theme }) => theme.colors.gray};
  margin: 0 auto;
  height: 100vh;
  padding: 2rem;
  min-height: 700px;
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

const Form = styled.form`
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

function LogInForm({ isAdmin, headerText }: ILogInFormProps) {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ILogInData>();
  const onLogInSubmit = (data: ILogInData) => {
    const email = getValues!('email');
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if (email.match(emailRegEx) === null) {
      toast.error('????????? ????????? ????????? ????????????', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: true,
      });
    } else {
      if (!isAdmin) {
        dispatch(
          userLogIn({
            email: data.email,
            password: data.password,
          }),
        );
      } else {
        dispatch(
          adminLogIn({
            email: data.email,
            password: data.password,
          }),
        );
      }
    }
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onLogInSubmit)}>
        <Header>
          <h1>Log In</h1>
          <span>{headerText}</span>
        </Header>

        <LogInInputContainer>
          <Input
            type="email"
            label="Email ID"
            error={errors.email}
            register={register('email', {
              required: 'Email ID??? ??????????????????',
            })}
          />
          <Input
            type="password"
            label="Password"
            error={errors.password}
            register={register('password', {
              required: 'Password??? ??????????????????',
              minLength: {
                value: 10,
                message: '??????????????? 10??? ???????????????',
              },
            })}
          />
        </LogInInputContainer>
        <BottomButtonContainer>
          {!isAdmin ? (
            <Link to="/admin/login">????????? ???????????? ?????????</Link>
          ) : null}
          <Link to={'/signup'}>????????? ????????????????</Link>
        </BottomButtonContainer>
        <SubmitButton text="Log In" />
        <SocialLogIn />
      </Form>
    </Wrapper>
  );
}

export default LogInForm;
