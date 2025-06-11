import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Для сброса базовых стилей CSS

const customTheme = createTheme({
  palette: {
    mode: 'light', // Или 'dark' для темной темы
    primary: {
      main: '#1976d2', // Стандартный синий MUI
    },
    secondary: {
      main: '#dc004e', // Стандартный розовый MUI
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // MUI использует Roboto по умолчанию
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ThemeProvider делает тему доступной для всех компонентов MUI */}
    <ThemeProvider theme={customTheme}>
      {/* CssBaseline сбрасывает CSS-стили браузеров для консистентного отображения */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
