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



export default function FormDialog({ handleCloseAdd, openAddModal, HandleaddCoin, notifyWarn, coinSymbol, notifyNotHave }) {
  const [coinName, setCoinName] = useState('');
  const [totCoin, setTotCoin] = useState();  
  const [totAmnt, setTotAmnt] = useState();
  

  const handleSubmit = () => {
   if((coinSymbol.find(c => c === coinName) && coinName.trim().length <= 7) && (totAmnt > 0 && totCoin > 0)) /* coinSymbol.find(c => c === coinName) && coinName.trim().length <= 7 && totAmnt > 0 && totCoin > 0 */
    {
      HandleaddCoin(coinName, totCoin, totAmnt);
      setCoinName("");
      setTotCoin();
      setTotAmnt();
      handleCloseAdd();
    } 
    else if(coinSymbol.find(c => c === coinName) === undefined){
      notifyNotHave()
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
          <Typography variant="body2" color='Secondary' align='center'>
           *YC only has data 0f top 250 coins! 
          </Typography>
          <Typography variant="caption" display="block" color='textPrimary' align='center'>Powerd By Gecko Coins</Typography>
          </DialogContentText>
          <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Enter symbol of the coin"
                type="name"
                fullWidth
                name='name'
                value={coinName.toLowerCase().trim()}
                onChange={(e) => setCoinName((e.target.value))}
                variant='outlined'
                placeholder='btc'
                InputProps={{
                  startAdornment: <InputAdornment position="start">Symbol:</InputAdornment>,
                }}
            />
           <TextField
            margin="dense"
            id="coinAmount"
            label="Total Amount Invested"
            type="tel"
            fullWidth
            placeholder='0'
            value={totAmnt}
            onChange={(e) => setTotAmnt(e.target.value)}
            variant='outlined'
            InputProps={{
              startAdornment: <InputAdornment position="start">₹</InputAdornment>,
            }}
          />
          <TextField
            margin="dense"
            id="coinTotal"
            label="Total Coins"
            type="tel"
            placeholder='0'
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
