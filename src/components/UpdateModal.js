import { React , useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



export default function FormDialog({ openUpdateModal, handleCloseUpdate, HandleaddCoin, updateCoinName, updateTotCoin, setUpdateTotCoin, setUpdateTotAmnt, updateTotAmnt }) {


  const handleSubmit = () => {
    /* HandleaddCoin(coinName, totCoin, totAmnt);
    setCoinName("");
    setTotCoin(0);
    setTotAmnt(0);
    handleCloseUpdate(); */
    //console.log(newCoinName)
    console.log(updateCoinName)
  };
  return (
    <div>
      <Dialog open={openUpdateModal} onClose={handleCloseUpdate} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Your Investment Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
           {`kindly update the ${updateCoinName}`}
          </DialogContentText>
           <TextField
            autoFocus
            margin="dense"
            id="coin"
            label="Total Amount Invested"
            type="number"
            fullWidth
            name='totAmnt'
            value={updateTotCoin}
            onChange={(e) => setUpdateTotCoin(e.target.value)}
            variant='outlined'
          />
          <TextField
            margin="dense"
            id="coin"
            label="Total Coin"
            type="number"
            fullWidth
            name='totCoin'
            value={updateTotAmnt}
            onChange={(e) => setUpdateTotAmnt(e.target.value)}
            variant='outlined'
          />
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleCloseUpdate} color="secondary">
            Cancel
          </Button>
          <Button variant='contained' color="primary" onClick={() => console.log(updateCoinName)}>
            Add Coin
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

