import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250
  },
  listItem:{
    marginLeft: 10,
    textDecoration: 'none'
  },
  head : {
    backgroundColor: '#3F53B5',
    color: '#ffff'
  },
  chip:{
    fontSize: 23,
    fontWeight: 'bolder',
    color: '#3F53B5',
    backgroundColor: 'white'
  },
 
}));

export default function ButtonAppBar({ Link , setInfoModal }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
              <Drawer />
            </IconButton>
            <Typography variant="h5" className={classes.title}> 
             <Chip label='Your' className={classes.chip}/> Coins  
            </Typography>
            <Button color="inherit" onClick={() => setInfoModal(true)}>
              <InfoIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <div className={classes.list}>
            <Box textAlign="center" p={1} className={classes.head}>
              <h3>Menu</h3>
            </Box>
            <Divider />
            <List>
            <Link to="/market">
              <ListItem>
              <Button onClick={()=> setOpen(false)}>
                <TrendingUpIcon color='primary'/>
                <ListItemText primary={"Market"} className={classes.listItem} />
                </Button>
              </ListItem>
              </Link>
              <Divider />
              <Link to="/">
              <ListItem>
              <Button onClick={()=> setOpen(false)}>
                <MonetizationOnIcon color='primary'/>
                <ListItemText primary={"Your Coin"} className={classes.listItem} />
                </Button>
              </ListItem>
              </Link>
              <Divider />
              <Link to="/news">
              <ListItem>
              <Button onClick={()=> setOpen(false)}>
                <LibraryBooksIcon color='primary'/>
                <ListItemText primary={"News"} className={classes.listItem} />
              </Button>
              </ListItem>
              </Link>
            </List>
            <Divider />
          </div>
        </Drawer>
      </>
    </>
  );
}
