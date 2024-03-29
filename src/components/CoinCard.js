import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import { useEffect } from 'react';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 30,
    marginBottom: 15
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 2,
    fontWeight: 'bold'
  },
  ilus: {
    width: 45,
    height: 45,
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

export default function OutlinedCard(props) {
const classes = useStyles();
const priceData =  props.coins.filter((c) => (c.symbol === props.name));
const currPrice = props.coin*priceData.map(x => x.current_price);
const profLoss = (currPrice-props.price).toFixed(2);
const priceChange = Math.abs(((props.price-currPrice)/props.price)*100).toFixed(2);
const color = profLoss > 0 ? '#198c19' : '#ff3232';
const status = profLoss > 0 ? 1 : 0;
const update = () => {
  props.setKnowCoinName(props.name)
  props.handleClickUpdate()
}
useEffect(() => {
  props.setThecurr(currPrice, props.index);
},[props.coinDetails])

const handleDel = () => {
  props.handleDelCoin(props.id)
  props.updateCurr(props.index)
}

useEffect(() => {
  props.setTheCoinStat(status, props.index);
},[props.coinDetails])



  return (
    <Container maxWidth="xs">
      <Card
        className={classes.root}
        variant="outlined"
        style={{ borderTop: `5px solid ${color}` }}
      >
        <CardContent>
          <img
            src={priceData.map((x) => x.image)}
            alt="coin"
            className={classes.ilus}
          />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {priceData.map((x) => x.symbol.toUpperCase())}
          </Typography>
          <Divider />
          <Typography variant="h5" component="h2" style={{ marginTop: "10px" }}>
            {priceData.map((x) => x.name.toUpperCase())}
          </Typography>
          <Typography className={classes.pos} color="textPrimary">
            {`🪙 Total Coin: ${props.coin}`}
          </Typography>
          <Typography className={classes.pos} color="textPrimary">
            {`💵 Total Investment: ₹${props.price}`}
          </Typography>
          <Typography variant="h9" component="h4" className={classes.pos}>
            {`📈 Current Price of Coin: ₹${priceData.map((x) =>
              x.current_price.toLocaleString()
            )}`}
            </Typography>
            <Typography variant="h9" component="h4" className={classes.pos}>
            <Chip label={`🙋‍♂️ Current Price For You: ₹${currPrice.toFixed(1)}`} variant='outlined' style={{ fontSize: 18, color: color }}/>
          </Typography>
          {profLoss > 0 ? (
            <Typography
              variant="h6"
              style={{ backgroundColor: "#198c19", color: "white", marginTop: "7px", fontWeight: "bolder", borderRadius: '50px' }}
            >
              {`😎 Profit: ₹${Math.abs(profLoss)} | ${priceChange}%`}
            </Typography>
          ) : (
            <Typography
              variant="h6"
              style={{ backgroundColor: "#ff3232", color: "white", marginTop: "7px", fontWeight: "bolder", borderRadius: '50px' }}
            >
              {`😢 Loss: ₹${Math.abs(profLoss)} | ${priceChange}%`}
            </Typography>
          )}
        </CardContent>
        <CardActions className={classes.controls}>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={update}
          >
            Konw More
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={handleDel}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
