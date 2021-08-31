import React from 'react';
import bg from './bg.jpg';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4.4rem',
  },
};

function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
    <Typography variant="h1" component="h1" color="Primary" text-align='center'>
    INDIAN CUISINE
  </Typography></ThemeProvider></div>
    
  );
}

export default Home;