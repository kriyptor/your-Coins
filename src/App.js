import { React , useState , useEffect} from 'react';
import './App.css';
import AddCoinModal from './components/AddCoinModal';
import AddCoins from './components/AddCoins';
import CoinCard from './components/CoinCard'
import axios from 'axios';
import Progress from './components/Progress';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeStyles , theme } from '@material-ui/core/styles';
import Navbar from './components/NavBar';
import Chip from '@material-ui/core/Chip';
import Market from './components/Market';
import News from './components/News';
import InfoModal from './components/InfoModal';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FullScreenDialog from './components/FullKnowMore';
import { palette } from '@material-ui/system'
import { Grid } from '@material-ui/core';
toast.configure() 
const useStyles = makeStyles({
  controls: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
},
chip:{
  fontSize: 22,
  fontWeight: 'bolder',
  marginTop: 90,
  color: '#fffff'
},
chip2:{
  fontSize: 22,
  fontWeight: 'bolder',
  marginTop: 13,
},
chipFlex : {
  display: 'flex',
  flexDirection: 'column',
},

loader: {
 marginTop: 800
}
});

function App() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openKnowModal, setOpenKnowModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [coinDetails, setCoinDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [knowCoinName, setKnowCoinName] = useState('');
  const [uniRealAmt, setUniRealAmt] = useState([]);
  const [currInv, setCurrInv] = useState(new Array().fill(0));
  const [coinStatus, setCoinStatus] = useState(new Array().fill(0));
  const notifyAdded = () => {toast.success("Coin Added! 🤟", {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000,})};
  const notifyRemove = () => {toast.error("Coin removed! ☠️", {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000,})};
  const notifyWarn = () => {toast.warn("Kindly Enter Correct values! ☑️", {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2500,})};
  const notifyNotHave = () => {toast.error("Sorry we don't have this coin! 😥", {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000,})};
  const idGen = () => Math.floor(Math.random()*1000000);

  /* const prom1 =  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false`);
  const prom2 =  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=2&sparkline=false`);
  const promises = [prom1, prom2];
  useEffect(() =>{
  Promise.all(promises)
    .then(res => {
      setAllCoins(res)
      console.log(allCoins)
    })
    .catch(err => console.log(err.message))
  }, []) */
  
  useEffect(() =>{
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
    .then(res => {
      setCoins(res.data)
      setLoading(false)
    })
    .catch(err => console.log(err.message))
  }, [])
  
 const gainerCoins = coins.filter(c => c.price_change_percentage_24h > 0).sort(
    (a, b) =>
    b.price_change_percentage_24h - a.price_change_percentage_24h
);
 const losserCoins = coins.filter(c => c.price_change_percentage_24h < 0).sort(
    (a, b) =>
    a.price_change_percentage_24h - b.price_change_percentage_24h
);
  const coinSymbol = coins.map(c => c.symbol)
  const handleClickOpenAdd = () => {
    setOpenAddModal(true);
  };

  const handleCloseAdd = () => {
    setOpenAddModal(false);
  };

  const handleClickUpdate = () => { 
    setOpenKnowModal(true)
  }

  const addCoin = (name, coin, amount) => {
    const newDet = {
      id: idGen(),
      name: name,
      total_coin: coin,
      total_amount: amount,
    };
    const newDetails = [newDet, ...coinDetails];
    setCoinDetails(newDetails);
    notifyAdded();
  };

  const delCoin = (id) => {
    const newDetails = coinDetails.filter(coin => coin.id !== id)
    setCoinDetails(newDetails)
    notifyRemove()
  }

 
  
  useEffect(() => {
    const fetchDetails = JSON.parse(localStorage.getItem('Your-Coin'));
    if(fetchDetails){
      setCoinDetails(fetchDetails);
    }
    else{
      setLoading(true)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("Your-Coin", JSON.stringify(coinDetails));
  }, [coinDetails])

  const setThecurr = (newValue, i) => {
    setCurrInv(oldSubtotals => {	
      const newSubtotals = [...oldSubtotals];
      newSubtotals[i] = newValue;
      return newSubtotals;
    });
  }
  const setTheCoinStat = (newValue, i) => {
    setCoinStatus(oldSubtotals => {	
      const newSubtotals = [...oldSubtotals];
      newSubtotals[i] = newValue;
      return newSubtotals;
    });
  }

  const updateCurr = (i) => {
    setCurrInv(currInv.splice(i, 1))
  }
/* useEffect(() => {
  console.log(currInv)
  console.log(currInv.reduce((acc, curr) => (acc = acc + curr),0).toFixed(2))
}, [currInv]) */
useEffect(() => {
  console.log(coinStatus.filter(x => x===1).length)
  console.log(coinStatus.filter(x => x===0).length)
  console.log(coinStatus)
}, [coinDetails])
const wholeAmt = coinDetails
  .map((x) => parseInt(x.total_amount, 10))
  .reduce((acc, curr) => (acc = acc + curr), 0);
const classes = useStyles();
const addCurrAmt = uniRealAmt.reduce((acc, curr) => (acc = acc + curr),0);
const chipColor = currInv.reduce((acc, curr) => (acc = acc + curr),0).toFixed(2) > wholeAmt ? 'green' : 'red';

  return (
    <Router>
      <div className="App">
        <Navbar Link={Link} setInfoModal={setInfoModal}/>
        <Switch>
          <Route exact path="/">
            <AddCoins handleClickOpenAdd={handleClickOpenAdd} />
            <AddCoinModal
              handleCloseAdd={handleCloseAdd}
              openAddModal={openAddModal}
              HandleaddCoin={addCoin}
              notifyWarn={notifyWarn}
              coinSymbol={coinSymbol}
              notifyNotHave={notifyNotHave}
            />
            <InfoModal setInfoModal={setInfoModal} infoModal={infoModal} />
            {loading ? (
              <Chip
                label={`Total Investment: Loading..`}
                color="primary"
                className={classes.chip}
              />
            ) : (
              <>
              <Chip
                label={`Total Investment Price: ₹${wholeAmt}`}
                color="primary"
                className={classes.chip}
              />
              <Chip
                label={`Return On Investment: ₹${currInv.reduce((acc, curr) => (acc = acc + curr),0).toFixed(2)}`}
                variant='outlined'
                style={{ color : chipColor }}
                className={classes.chip2}
              />
              </>
            )}
            <>
              {loading ? (
                <Progress style={{  marginTop: 800 }}/>
              ) : (
                coinDetails.map((det, i) => (
                  <CoinCard
                    key={det.id}
                    id={det.id}
                    name={det.name}
                    coin={det.total_coin}
                    price={det.total_amount}
                    coins={coins}
                    handleDelCoin={delCoin}
                    handleClickUpdate={handleClickUpdate}
                    setKnowCoinName={setKnowCoinName}
                    addCurrAmt={addCurrAmt}
                    setUniRealAmt={setUniRealAmt}
                    uniRealAmt={uniRealAmt}
                    index={i}
                    setThecurr ={setThecurr}
                    coinDetails={coinDetails}
                    updateCurr={updateCurr}
                    setTheCoinStat={setTheCoinStat}
                  />
                ))
              )}
              <FullScreenDialog
              openKnowModal={openKnowModal}
              coins={coins}
              knowCoinName={knowCoinName}
              setOpenKnowModal={setOpenKnowModal}
              />
            </>
          </Route>
          <Route exact path="/market">
          <FullScreenDialog
              openKnowModal={openKnowModal}
              coins={coins}
              knowCoinName={knowCoinName}
              setOpenKnowModal={setOpenKnowModal}
              />
            <InfoModal setInfoModal={setInfoModal} infoModal={infoModal} />
            <Market
              coins={coins}
              gainerCoins={gainerCoins}
              losserCoins={losserCoins}
              handleClickUpdate={handleClickUpdate}
              setKnowCoinName={setKnowCoinName}
            />
          </Route>
          <Route exact path="/news">
          <InfoModal setInfoModal={setInfoModal} infoModal={infoModal} />
            <News />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;