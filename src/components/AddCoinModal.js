import { React , useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




export default function FormDialog({ handleCloseAdd, openAddModal, HandleaddCoin }) {
  const [coinName, setCoinName] = useState('');
  const [totCoin, setTotCoin] = useState(0);  
  const [totAmnt, setTotAmnt] = useState(0);


  const handleSubmit = () => {
    HandleaddCoin(coinName, totCoin, totAmnt);
    setCoinName("");
    setTotCoin(0);
    setTotAmnt(0);
    handleCloseAdd();
  };

  return (
    <div>
      <Dialog open={openAddModal} onClose={handleCloseAdd} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Your Investment Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Kindly enter the authentic details regarding your crypto investment below.
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
              required={true}
          />
           <TextField
            margin="dense"
            id="coin"
            label="Total Amount Invested"
            type="number"
            fullWidth
            name='totAmnt'
            value={totAmnt}
            onChange={(e) => setTotAmnt(e.target.value)}
            variant='outlined'
          />
          <TextField
            margin="dense"
            id="coin"
            label="Total Coin"
            type="number"
            fullWidth
            name='totCoin'
            value={totCoin}
            onChange={(e) => setTotCoin(e.target.value)}
            variant='outlined'
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

