import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/GlobalStyles';
import wiseup from './assets/styles/Theme';

import Header from './components/Header';

const App = () => (
  <ThemeProvider theme={wiseup}>
    <GlobalStyles />
    <Header />
  </ThemeProvider>
);

export default App;
