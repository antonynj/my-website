import React from "react";
import Button from '@material-ui/core/Button'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Container, Grid, Box, AppBar} from '@material-ui/core';
import './App.css';

function Footer() {
    const displayDesktop = () => {
      
    };
    
    return (
      <footer>
          <div className="Footer">
          <Box>
          <Container maxWidth="sm">
            
              <Grid item xs={12} >
                <Box>
                
                <Button 
                  
                  startIcon={<InstagramIcon />} 
                  size="large"
                  
                  href="http://www.instagram.com"
                  
                  color="primary"></Button>
        
                  
                
                <Button 
                  startIcon={<FacebookIcon />} 
                  size="large"
                  
                  href="http://www.facebook.com"
                  
                  color="primary"></Button>
        
                
                
                <Button 
                  startIcon={<TwitterIcon />}
                  size="large" 
                  
                  href="http://www.twitter.com"
                  
                  color="primary"></Button>
        
                </Box>
                <Box textAlign="center">
                  Dedicated to codnity &reg; {new Date().getFullYear()}
                </Box>

              </Grid>
            
          </Container>
        </Box>
        <AppBar>{displayDesktop()}</AppBar>
        </div> 
      </footer>
    );
  }

  export default Footer;