import { initializeApp } from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styled/theme';
import { GlobalStyle } from './styled/global';

import { Main } from './pages';

initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE__API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE__AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE__PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE__STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE__MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE__APP_ID,
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
