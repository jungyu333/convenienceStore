import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/common/Layout';
import GlobalFont from './fonts/fonts';
import Router from './Router';
import { theme } from './styles/theme';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFont />
      <Layout />
      <Router />
    </ThemeProvider>
  );
}

export default App;
