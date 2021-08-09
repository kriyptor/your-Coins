import { React , useState , useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import './App.css';
import AddCoinModal from './components/AddCoinModal';
import AddCoins from './components/AddCoins';
import CoinCard from './components/CoinCard'
import axios from 'axios';
import Progress from './components/Progress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/NavBar'
import BottomNav from './components/BottomNav'
import UpdateModal from './components/UpdateModal'
import KnowMoreModal from './components/KnowMoreModal'
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Market from './components/Market'
import News from './components/News';
import MarketPaper from './components/MarketPaper';
import Paper from '@material-ui/core/Paper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



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
  marginTop: 70,
  color: '#fffff'
},

loader: {
 marginTop: '50px',
 marginBottom: 'auto',
}
});

function App() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [coinDetails, setCoinDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [updateCoinName, setUpdateCoinName] = useState('');
  const [updateTotCoin, setUpdateTotCoin] = useState();
  const [updateTotAmnt, setUpdateTotAmnt] = useState();
  const [uniRealAmt, setUniRealAmt] = useState([]);
  const realAmt = []
  const notifyAdded = () => {toast.success("Coin Added! 🤟", {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000,})};
  const notifyRemove = () => {toast.error("Coin removed! ☠️", {position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000,})};
  const idGen = () => Math.floor(Math.random()*1000000);
  
  useEffect(() =>{
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(res => {
      setCoins(res.data)
      setLoading(false)
    })
    .catch(err => console.log(err.message))
  }, [])
  
  const handleClickOpenAdd = () => {
    setOpenAddModal(true);
  };

  const handleCloseAdd = () => {
    setOpenAddModal(false);
  };

  const handleClickUpdate = () => { 
    setOpenUpdateModal(true)
  }

  const handleCloseUpdate = () => {
    setOpenUpdateModal(false)
  }

 
  const gainer = coins.filter(c => c.price_change_percentage_24h < 0)

  const addCoin = (name, coin, amount) => {
    const newDet = {
      id : idGen(),
      name : name,
      total_coin: coin,
      total_amount: amount
    }
    const newDetails = [newDet, ...coinDetails]
    setCoinDetails(newDetails)
    notifyAdded()
  }

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

 
 
  /* if(coinDetails){
    setWholeInv(coinDetails.map((x) => parseInt(x.total_amount, 10)).reduce((acc, curr) => acc = acc + curr))
  } */

const wholeAmt = coinDetails
  .map((x) => parseInt(x.total_amount, 10))
  .reduce((acc, curr) => (acc = acc + curr), 0);
const classes = useStyles();
const display = loading ? 'none' : 'block'

const addCurrAmt = uniRealAmt.reduce((acc, curr) => (acc = acc + curr),0);


  return (
    <Router>
    <div className="App">
      <Navbar Link={Link}/>
      <Switch>
      <Route exact path="/">
      <AddCoins handleClickOpenAdd={handleClickOpenAdd} />
      <AddCoinModal
        handleCloseAdd={handleCloseAdd}
        openAddModal={openAddModal}
        HandleaddCoin={addCoin}
      />
      <button onClick={() => console.log(gainer.map(c => c.price_change_percentage_24h).sort((a, b) => a-b))}>click</button>
      {/* <UpdateModal
      openUpdateModal={openUpdateModal}
      handleCloseUpdate={handleCloseUpdate}
      HandleaddCoin={addCoin}
      updateCoinName={updateCoinName}
      updateTotCoin={updateTotCoin}
      setUpdateTotCoin={setUpdateTotCoin}
      updateTotAmnt={updateTotAmnt}
      setUpdateTotAmnt={setUpdateTotAmnt}
      /> */}
      <KnowMoreModal
      openUpdateModal={openUpdateModal}
      coins={coins}
      updateCoinName={updateCoinName}
      setOpenUpdateModal={setOpenUpdateModal}
      updateCoinName={updateCoinName}
      />
      {
        loading ? ( <Chip label={`Total Investment: Loading..`} color="primary" className={classes.chip}/>) : (
          <Chip label={`Total Investment: ₹${wholeAmt}`}  color="primary" className={classes.chip} />
        )
      }
      <>
        {loading ? (
          <Progress/>
        ) : (
          coinDetails.map((det) => (
            <CoinCard
              key={det.id}
              id={det.id}
              name={det.name}
              coin={det.total_coin}
              price={det.total_amount}
              coins={coins}
              handleDelCoin={delCoin}
              handleClickUpdate={handleClickUpdate}
              setUpdateCoinName={setUpdateCoinName}
              setUpdateTotCoin={setUpdateTotCoin}
              setUpdateTotAmnt={setUpdateTotAmnt}
              realAmt={realAmt}
              addCurrAmt={addCurrAmt}
              setUniRealAmt={setUniRealAmt}
              uniRealAmt={ uniRealAmt}
              
            />
          ))
        )}
      </>
      </Route>
      <Route exact path="/market">
            <Market/>
            {
              coins.map((c) => (
                <MarketPaper
                key={c.id}
                name={c.name}
                currPrice={c.current_price}
                priceChange={c.price_change_percentage_24h }
                coinImg={c.image}
                />
              ))
            }
      </Route>
      <Route exact path="/news">
            <News/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;