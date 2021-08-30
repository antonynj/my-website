import React from 'react';
import bg from './bg.jpg';
import Typography from '@material-ui/core/Typography';

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        width: '97vw',
        height: '75vh'}}
    ><body><br/><Typography variant="h1" component="h1" color="textPrimary" text-align='center'>
    INDIAN CUISINES
  </Typography></body></div>
    
  );
}

export default Home;