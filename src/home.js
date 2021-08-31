import React from 'react';
import bg from './bg.jpg';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from 'react-responsive';
import './App.css';

function Home() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 80px)",
  });
  return (
    <div
      style={{
        //backgroundImage: `url(${bg})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'}}>{isMobileDevice}
    </div>
    
  );
}

export default Home;