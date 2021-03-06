import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/GlobalStyles';
import wiseup from './assets/styles/Theme';

import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Methodology from './components/Methodology';
import HowToStudy from './components/HowToStudy';
import ForWho from './components/ForWho';
import Depositions from './components/Depositions';
import Footer from './components/Footer';

const App = () => (
  <ThemeProvider theme={wiseup}>
    <GlobalStyles />
    <Header />
    <Hero />
    <Benefits />
    <Methodology />
    <HowToStudy />
    <ForWho />
    <Depositions />
    <Footer />
  </ThemeProvider>
);

export default App;
