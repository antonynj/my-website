import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '1.8rem', 
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

const useStyles = makeStyles({
  root: {
    minWidth: 140,
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
  },
  media: {
    height: 240,
  },
});

function Carde() {
  const classes = useStyles();

  return (<div className="Header">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/food/tandoori.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Tandoori chicken wings
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Chicken wings marinated in a mixture of South Indian spices and yogurt, cooked in a special Tandoor clay oven and served with homemade chutney.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></div>
    
  );
}

function Cardee() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/food/gobi.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Gobi Manchurian
          </Typography>
          <Typography variant="body2" color="textSecondary"  component="p">
           Deep-fried pickled cauliflower, which are cooked with onions and ginger-garlic paste, which is later stewed with Manchurian sauce in a masala spice mixture.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Cardeee() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/food/chilli.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Chili Chicken
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p> Boneless marinated chicken, deep fried with a special masala spice mixture consisting of South Indian spices.             </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}

function SectionOne()
{
    const classes = useStyles();
    return(<div ><ThemeProvider theme={theme}><Typography variant="h3" component="h3">
    MENU
  </Typography></ThemeProvider>
        <Grid
      container
      spacing={4}
      className={classes.root}
      justify="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Carde />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardee />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Cardeee />
      </Grid>
    </Grid></div>
    );      
}

export default SectionOne;