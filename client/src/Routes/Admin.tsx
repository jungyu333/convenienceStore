import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { IAuthProps } from '../@types/common';
import { RootState } from '../store/store';

function Admin({ children }: IAuthProps) {
  const { me } = useSelector((state: RootState) => state.user);

  if (me && me.role !== 1) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
}

export default Admin;
