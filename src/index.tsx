import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styled/theme';
import { GlobalStyle } from './styled/global';

import { Main } from './pages';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
