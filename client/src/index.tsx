import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/globalStyle';
import { StyledEngineProvider } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <GlobalStyle />
        <App />
      </StyledEngineProvider>
    </Provider>
  </>,
);
