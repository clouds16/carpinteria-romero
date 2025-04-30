import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import App from './App';

// Import styles
import '@mantine/core/styles.css';
import './index.css';

// Create theme
const theme = createTheme({
  colors: {
    brown: [
      '#F8F5F0', // Lightest brown - almost white with warm undertone
      '#F2E9DE',
      '#E6D5C1',
      '#D4BEA3',
      '#C1A687',
      '#A88C6A',
      '#8B7051',
      '#6D563C',
      '#50402C',
      '#362A1B', // Darkest brown
    ],
    yellow: [
      '#FFFBEB',
      '#FEF3C7',
      '#FDE68A',
      '#FCD34D',
      '#FBBF24',
      '#F59E0B',
      '#D97706',
      '#B45309',
      '#92400E',
      '#78350F',
    ],
  },
  primaryColor: 'brown',
  fontFamily: 'Poppins, sans-serif',
  headings: {
    fontFamily: 'Playfair Display, serif',
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);