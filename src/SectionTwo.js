import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingTop: "30px",
  },
  media: {
    height: 240,
  },
});

function Carde() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/food/biriyani.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Chicken Biriyani
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Chicken pieces cooked in a special aromatic sauce with Basmati rice, Indian spices and herbs.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Cardee() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/food/thali.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            South Indian Thali
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rice, Chapati(chicken sause, deep fried fish, boiled egg), Dhal Sambar, Rasam, additives, kefir.
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
          image="/food/pongal.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ghee Pongal
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Boiled ghee rice and lentils with cashew nuts and South Indian spices, served with sambar.
           </Typography> 
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function SectionTwo()
{
    const classes = useStyles();
    return(<div><Typography variant="h3" component="h3">
    MENU
  </Typography>
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
  
export default SectionTwo;

