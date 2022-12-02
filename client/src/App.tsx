import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/common/Layout';
import GlobalFont from './fonts/fonts';
import Router from './Router';
import { theme } from './styles/theme';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalFont />
      <Layout />
      <Router />
    </ThemeProvider>
  );
}

export default App;
