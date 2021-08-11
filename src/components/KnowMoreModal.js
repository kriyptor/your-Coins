import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Table from './InfoTable';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

export default function AlertDialog(props) {
  const handleClose = () => {
    props.setOpenUpdateModal(false);
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
        TransitionComponent={Transition}
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
              <Table coinData={coinData}/>
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
