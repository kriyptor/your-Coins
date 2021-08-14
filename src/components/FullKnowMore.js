import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import InfoTable from './InfoTable'
import { Container } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  content : {
      marginTop : 10
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const coinData = props.coins.filter((c) => (c.symbol === props.knowCoinName))

  const handleClose = () => {
    props.setOpenKnowModal(false);
  };

  return (
    <div>
      <Dialog fullScreen open={props.openKnowModal} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
          <img
              src={coinData.map((x) => x.image)}
              alt="coin"
              width="40px"
              height="40px"
            />
            <Typography variant="h6" className={classes.title}>
            {coinData.map((x) => x.name.toUpperCase())}
            </Typography>
            <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.content}>
            <Container maxWidth='md'>
            <InfoTable coinData={coinData}/>
            </Container>
      </DialogContent>
      </Dialog>
    </div>
  );
}
