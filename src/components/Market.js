import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      marginTop: 65,
    },
  });

function Market() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        position='fixed'
      >
        <Tab label="All Coins" />
        <Tab label="Gainers" />
        <Tab label="Lossers" />
      </Tabs>
     {/*  <Market value={value} index={0}>
        Item One
      </Market>
      <Market value={value} index={1}>
        Item Two
      </Market>
      <Market value={value} index={2}>
        Item Three
      </Market> */}
    </Paper>
  );
}

export default Market
