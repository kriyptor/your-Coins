import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 15
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: 280,
  },
  image: {
    width: 60,
    height: 60,
    margin: 'auto',
    marginBottom: 10
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid({ name, coinImg, currPrice, priceChange , handleClickUpdate, setKnowCoinName, symbol}) {
  const classes = useStyles();
  const color = priceChange < 0 ? 'red' : 'green'
  const sign = priceChange > 0 ? <ArrowDropUpIcon/> :  <ArrowDropDownIcon/>
  const knowMore = () => {
    setKnowCoinName(symbol)
    handleClickUpdate()
  }
  
  return (
    <div className={classes.root} >
      <Paper className={classes.paper} variant="outlined">
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={coinImg} />
            </ButtonBase>
            <Divider/>
            </Grid>
              <Grid item xs>
                <Typography variant="h5" style={{  marginTop: 5 }}>
                  {name}
                </Typography>
                <Typography variant="h6">
                  {`Price: ₹${currPrice?.toLocaleString()}`}
                </Typography>
                <Typography variant="body1" style={{color: color, display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                {sign}{`Change: ${priceChange?.toFixed(2)}%`}
                </Typography>
              </Grid>
              <Grid item>
                <Button color='primary' variant="outlined" style={{ cursor: 'pointer', marginTop: 5 }} onClick={knowMore}>
                  Know More
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
