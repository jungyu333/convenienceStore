import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import LogInForm from '../../components/login/LogInForm';

function AdminLogIn() {
  return (
    <>
      <LogInForm isAdmin headerText="with admin account" />
    </>
  );
}

export default AdminLogIn;
