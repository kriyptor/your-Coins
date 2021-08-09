import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    bottom: '60px',
    right: '20px',
    zIndex: 999
  },
}));

function AddCoins({ handleClickOpenAdd }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Tooltip title="Add Coins" aria-label="Add Coins">
            <Button size="large" variant="contained" color="primary" onClick={handleClickOpenAdd}>
               <AddIcon/>
            </Button>
          </Tooltip>
        </div>
    )
}

export default AddCoins
