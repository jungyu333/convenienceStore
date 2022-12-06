import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetAuth, resetAvatar } from '../reducer/user';
import { RootState, useAppDispatch } from '../store/store';
import LogInForm from '../components/login/LogInForm';

function LogIn() {
  const navigation = useNavigate();
  const { authDone, loginDone } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (authDone) {
      dispatch(resetAuth());
    }
    dispatch(resetAvatar());
  }, [dispatch, authDone]);
  useEffect(() => {
    if (loginDone) {
      navigation('/', { replace: true });
    }
  }, [navigation, loginDone]);
  return (
    <>
      <LogInForm headerText="with your account" />
    </>
  );
}

export default LogIn;
