import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { resetAuth, resetAvatar } from '../reducer/user';
import { RootState, useAppDispatch } from '../store/store';
import LogInForm from '../components/login/LogInForm';

function LogIn() {
  const { authDone } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (authDone) {
      dispatch(resetAuth());
    }
    dispatch(resetAvatar());
  }, [dispatch, authDone]);

  return (
    <>
      <LogInForm headerText="with your account" />
    </>
  );
}

export default LogIn;
