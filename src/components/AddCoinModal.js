import { React , useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import {  Divider, Typography } from '@material-ui/core';



export default function FormDialog({ handleCloseAdd, openAddModal, HandleaddCoin, notifyWarn }) {
  const [coinName, setCoinName] = useState('');
  const [totCoin, setTotCoin] = useState(0);  
  const [totAmnt, setTotAmnt] = useState(0);


  const handleSubmit = () => {
    if(coinName.trim().length > 0 && coinName.trim().length <= 4 && totAmnt > 0 && totCoin > 0)
    {
    HandleaddCoin(coinName, totCoin, totAmnt);
    setCoinName("");
    setTotCoin(0);
    setTotAmnt(0);
    handleCloseAdd();
    }
    else{
      notifyWarn()
    }
  };

  return (
    <div>
      <Dialog open={openAddModal} onClose={handleCloseAdd} aria-labelledby="form-dialog-title">
       <DialogTitle id="form-dialog-title" style={{ backgroundColor: '#3f51b5' , color: '#FFFFFF'}}>
          <Typography variant='h6'align='center'>Add Your Investment Details</Typography>
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText>
          <Typography variant="body2" color='Secondary' align='justify'>
          *Kindly enter the authentic details regarding your crypto investment below. otherwise projection will be faulty
          </Typography>
          </DialogContentText>
          <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Enter symbol of the coin"
                type="name"
                fullWidth
                name='name'
                value={coinName.toLowerCase()}
                onChange={(e) => setCoinName((e.target.value))}
                variant='outlined'
                placeholder='btc'
                InputProps={{
                  startAdornment: <InputAdornment position="start">Symbol:</InputAdornment>,
                }}
            />
           <TextField
            margin="dense"
            id="coin"
            label="Total Amount Invested"
            type="number"
            fullWidth
            name='totAmnt'
            value={totAmnt}
            startAdornment='$'
            onChange={(e) => setTotAmnt(e.target.value)}
            variant='outlined'
            InputProps={{
              startAdornment: <InputAdornment position="start">₹</InputAdornment>,
            }}
          />
          <TextField
            margin="dense"
            id="coin"
            label="Total Coins"
            type="number"
            fullWidth
            name='totCoin'
            value={totCoin}
            onChange={(e) => setTotCoin(e.target.value)}
            variant='outlined'
            InputProps={{
              startAdornment: <InputAdornment position="start">Coins</InputAdornment>,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleCloseAdd} color="secondary">
            Cancel
          </Button>
          <Button variant='contained' onClick={handleSubmit} color="primary">
            Add Coin
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
