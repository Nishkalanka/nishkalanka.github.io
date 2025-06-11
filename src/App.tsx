import { useState } from 'react';
//import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh', // Чтобы занимал всю высоту экрана
          padding: 2, // Отступ, 1 unit = 8px по умолчанию в MUI
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Привет, это твой сайт-резюме!
        </Typography>
        <Typography variant="body1" paragraph>
          Скоро мы сделаем его красивым с помощью Material UI.
        </Typography>

        {/* Пример кнопки MUI */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount((c) => c + 1)}
        >
          Кнопка из MUI: Нажал {count} раз
        </Button>
      </Box>
    </>
  );
}

export default App;
