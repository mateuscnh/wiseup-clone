import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/GlobalStyles';
import wiseup from './assets/styles/Theme';

import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';

const App = () => (
  <ThemeProvider theme={wiseup}>
    <GlobalStyles />
    <Header />
    <Hero />
    <Benefits />
  </ThemeProvider>
);

export default App;
