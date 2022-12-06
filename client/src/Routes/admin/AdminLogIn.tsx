import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogInForm from '../../components/login/LogInForm';
import { resetAuth, resetAvatar } from '../../reducer/user';
import { RootState, useAppDispatch } from '../../store/store';

function AdminLogIn() {
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
      <LogInForm isAdmin headerText="with admin account" />
    </>
  );
}

export default AdminLogIn;
