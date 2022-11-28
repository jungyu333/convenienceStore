import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/common/Layout';
import GlobalFont from './fonts/fonts';
import Router from './Router';
import { theme } from './styles/theme';

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
