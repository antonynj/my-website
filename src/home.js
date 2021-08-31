import React from 'react';
import bg from './bg.jpg';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';



const theme = createTheme();

theme.typography.h1 = {
  fontSize: '1.8rem', fontFamily: 'Arial',
  '@media (min-width:600px)': {
    fontSize: '1.8rem', fontFamily: 'Arial',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.4rem', fontFamily: 'Arial',
  },
};

function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography  variant="h1" component="h1" color="Primary" text-align='center'>
          Indian Cuisine
        </Typography><img src={bg} className="App-bg" alt="bg" />
        <a
          href="./bg.jpg"
          target="_blank"
          rel="noopener noreferrer">
        </a>
      </ThemeProvider>
  </div>
    
  );
}

export default Home;