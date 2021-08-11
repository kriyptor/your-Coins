import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Divider, Typography } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ infoModal , setInfoModal }) {


  const handleClose = () => {
    setInfoModal(false);
  };

  return (
    <div>
      <Dialog
        open={infoModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
            <Typography variant='h6'  align='center'>
            What is Your Coin ? And How to use it!
            </Typography>
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <Typography>
               Your Coin is a one stop platform for all your crypto investments!
               here you can track the your all crypto investments.
           </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant='contained'>
            Got it!!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
