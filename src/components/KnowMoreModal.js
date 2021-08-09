import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

export default function AlertDialog(props) {
  const handleClose = () => {
    props.setOpenUpdateModal(false);
    console.log()
  };
  const coinData = props.coins.filter((c) => (c.symbol === props.updateCoinName))
  return (
    <div>
      <Dialog
        open={props.openUpdateModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth='sm'
      >
        <DialogTitle id="alert-dialog-title">
          <Typography
            variant="h5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={coinData.map((x) => x.image)}
              alt="coin"
              width="45px"
              height="45px"
              style={{marginRight: '10px'}}
            />
            {coinData.map((x) => x.name.toUpperCase())}
          </Typography>
        </DialogTitle>
        <Divider />
        <DialogContent align='center'>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="h6">
           {` High in 24hr: ₹${coinData.map((x) => x.high_24h.toLocaleString())} || Low in 24hr: ₹${coinData.map((x) => x.low_24h.toLocaleString())}`}
            </Typography>
            <Typography variant="h6">
            {`All Time High: ₹${coinData.map((x) => x.ath.toLocaleString())} || All Time Low: ₹${coinData.map((x) => x.atl.toLocaleString())}`}
            </Typography>
            <Divider />
            Market Cap: ₹{coinData.map((x) => x.market_cap.toLocaleString())}
            <Divider />
            Price Change in 24hr: ₹{coinData.map((x) => x.price_change_24h.toLocaleString())}
            <Divider />
            Price Change in 24hr: {coinData.map((x) => x.price_change_percentage_24h.toFixed(2))}%
            <Divider />
            Market Cap Change in 24hr: ₹{coinData.map((x) => x.market_cap_change_24h.toLocaleString())}
            <Divider />
            Market Cap Change in 24hr: {coinData.map((x) => x.market_cap_change_percentage_24h.toFixed(2))}%
            <Divider />
            <Divider />
            All Time High Change: {coinData.map((x) => x.ath_change_percentage.toFixed(2))}%
            <Divider />
            
            <Divider />
            All Time Low Change: {coinData.map((x) => x.atl_change_percentage.toFixed(2))}%
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
