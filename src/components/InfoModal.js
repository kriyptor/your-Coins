import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Container, Divider, Typography } from '@material-ui/core';
import { useHistory  } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ infoModal , setInfoModal }) {
  const history = useHistory();

  const handleClose = () => {
    setInfoModal(false);
  };

  const handleLink = () => {
    history.push('/')
    setInfoModal(false);
  }
  
  const handleLinkMarket = () => {
    history.push('/market')
    setInfoModal(false);
  }

  const handleLinkNews = () => {
    history.push('/news')
    setInfoModal(false);
  }

  return (
    <div>
      <Dialog
        open={infoModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullScreen
      >
        <DialogTitle id="alert-dialog-slide-title" style={{ backgroundColor: '#3f51b5' , color: '#FFFFFF'}}>
            <Typography variant='h6'  align='center'>
            What is Your Coin? And How to use it!
            </Typography>
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText>
            <Container size='md'>
           <Typography variant="subtitle1" color='textPrimary' align='center'>
              <strong>Your Coin is a one stop platform for all your cryptocurrency investments!</strong>
               <br/>It is designed and developed to bring all your cryptocurrency investments into one place. 
               <br/>If you invest in different platforms at times, it becomes quite problematic to track your each investment over time, hence <strong>Your Coin</strong> is here to solve this problem.
           </Typography>
           <hr/>
           <Typography variant="subtitle1" color='textPrimary' gutterBottom align='center'>
               You can add your all crypto investment <Button variant='outlined' onClick={handleLink} size='small'>here</Button> in-order to track at one place.
               <br/>Your crucial and valuable data is stored only on your device (local storage) and not in a third party service, <strong>so it's totally secure!</strong>
               <br/>However, because it is stored in your local storage on one specific device, you cannot access it from another device.
               <Typography variant="body2" color='Secondary'>*The actual price of the coin may vary depending on the services, but the overall price is pretty close!</Typography>
           </Typography>
           <Divider/>
           <Typography variant="subtitle1" color='textPrimary' gutterBottom align='center'>
           Get the current status of top 100 crypto coins <Button variant='outlined' onClick={handleLinkMarket} size='small'>here</Button>, along with details like Current Price, Market Cap, All time high/low etc of each coin.
           </Typography>
           <Divider/>
           <Typography variant="subtitle1" color='textPrimary' gutterBottom align='center'>
           You can also get relevant and current news <Button variant='outlined' onClick={handleLinkNews} size='small'>here</Button> about the crypto field, not just that you can read and share news with others if you like!
           </Typography>
           <hr/>
           </Container>
          <Typography variant="caption" display="block" color='textPrimary' align='center'>Made with 💓 by <a href="https://github.com/kriyptor">Shivanshu Kashyap</a></Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant='contained' size='large'>
            Got it!!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
