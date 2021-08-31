import './App.css';
import React from "react";
import Header from './Header';
import Footer from './Footer';
import { useMediaQuery } from 'react-responsive';
import Home from './home';



function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 80px)",
  });
  return (
    
    <div className="App">
      {isMobileDevice && <Header />}
      {isMobileDevice && <Footer />}
    </div>
  );
}

export default App;
