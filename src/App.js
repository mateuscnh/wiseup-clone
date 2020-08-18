import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/GlobalStyles';
import wiseup from './assets/styles/Theme';

const App = () => (
  <ThemeProvider theme={wiseup}>
    <GlobalStyles />
    <h1>Hello World</h1>
  </ThemeProvider>
);

export default App;
