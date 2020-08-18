import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/GlobalStyles';
import wiseup from './assets/styles/Theme';

import Header from './components/Header';
import Hero from './components/Hero';

const App = () => (
  <ThemeProvider theme={wiseup}>
    <GlobalStyles />
    <Header />
    <Hero />
  </ThemeProvider>
);

export default App;
