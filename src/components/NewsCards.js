import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LaunchIcon from '@material-ui/icons/Launch';
import { toast } from 'react-toastify';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: 345,
    marginTop: 30
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#3F53B5',
  },
}));

export default function RecipeReviewCard({ title, author, thumbnail, description, link, publishedAt }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const notifyCopied = () => {toast.success("The link has been copied! 📋", {position: toast.POSITION.BOTTOM_CENTER, autoClose: 1800,})};
  const copyLink = () => {
    notifyCopied()
    navigator.clipboard.writeText(link)
  }
  

  const routeChange = () =>{  
    window.open(link, "_blank")
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} variant='outlined'>
      <CardHeader
        avatar={
          <Avatar aria-label="news" className={classes.avatar}>
            YC
          </Avatar>
        }
        action={
          <IconButton aria-label="share" onClick={copyLink}>
             <ShareIcon />
          </IconButton>
        }
        title={<Button variant='text' onClick={routeChange}>{`By ${author}`}</Button>}
        subheader={publishedAt}
      />
      <CardMedia
        className={classes.media}
        image={thumbnail}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share" onClick={routeChange}>
          <LaunchIcon/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
