import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MarketPaper from "./MarketPaper";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 60,
  },
  search: {
    flexGrow: 1,
    marginTop: 20,
  },
});

function Market({
  coins,
  gainerCoins,
  losserCoins,
  setKnowCoinName,
  handleClickUpdate,
}) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [search, setSearch] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
        <>
          <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              position="fixed"
            >
              <Tab label="All Coins" icon={<MonetizationOnIcon />} />
              <Tab label="Gainers" icon={<TrendingUpIcon />} />
              <Tab label="Lossers" icon={<TrendingDownIcon />} />
            </Tabs>
          </Paper>

          {value === 0 && (
            <>
              <TextField
                id="outlined-basic"
                label="Search Coin"
                variant="outlined"
                className={classes.search}
                onChange={handleSearch}
              />
              {filteredCoins.map((c) => (
                <MarketPaper
                  key={c.id}
                  name={c.name}
                  currPrice={c.current_price}
                  priceChange={c.price_change_percentage_24h}
                  coinImg={c.image}
                  symbol={c.symbol}
                  handleClickUpdate={handleClickUpdate}
                  setKnowCoinName={setKnowCoinName}
                />
              ))}
            </>
          )}
          {value === 1 &&
            gainerCoins.map((c) => (
              <MarketPaper
                key={c.id}
                name={c.name}
                currPrice={c.current_price}
                priceChange={c.price_change_percentage_24h}
                coinImg={c.image}
                symbol={c.symbol}
                handleClickUpdate={handleClickUpdate}
                setKnowCoinName={setKnowCoinName}
              />
            ))}
          {value === 2 &&
            losserCoins.map((c) => (
              <MarketPaper
                key={c.id}
                name={c.name}
                currPrice={c.current_price}
                priceChange={c.price_change_percentage_24h}
                coinImg={c.image}
                symbol={c.symbol}
                handleClickUpdate={handleClickUpdate}
                setKnowCoinName={setKnowCoinName}
              />
            ))}
        </>
  );
}

export default Market;
