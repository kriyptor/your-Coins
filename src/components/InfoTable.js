import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        }
    },
  table: {
    minWidth: 200,
  },
}));

export default function BasicTable({ coinData }) {
    const classes = useStyles();
    function createData(name, values) {
        return { name, values };
      }
      const supply = coinData.map((x) => x.total_supply) !== null ? coinData.map((x) => x.total_supply).toLocaleString() : 'NA'
      const rows = [
        createData('Symbol', `${coinData.map((x) => x.symbol)}`),
        createData('Market Rank', `#${coinData.map((x) => x.market_cap_rank)}`),
        createData('Current Price', `₹${coinData.map((x) => x.current_price.toLocaleString())}`),
        createData('Price Change in 24hr', `₹${coinData.map((x) => x.price_change_24h.toLocaleString())} | ${coinData.map((x) => x.price_change_percentage_24h.toFixed(2))}%`),
        createData('High In 24hr', `₹${coinData.map((x) => x.high_24h.toLocaleString())}`),
        createData('Low In 24hr', `₹${coinData.map((x) => x.low_24h.toLocaleString())}`), 
        createData('All time high', `₹${coinData.map((x) => x.ath.toLocaleString())}`),
        createData('All time low', `₹${coinData.map((x) => x.atl.toLocaleString())}`),
        createData('Market Cap', `₹${coinData.map((x) => x.market_cap.toLocaleString())}`),
        createData('Market Cap Change in 24hr', `₹${coinData.map((x) => x.market_cap_change_24h.toLocaleString())} | ${coinData.map((x) => x.market_cap_change_percentage_24h.toFixed(2))}%`), 
        createData('Circulating Supply', `${coinData.map((x) => x.circulating_supply.toLocaleString())}`),
        createData('Total Supply', supply),
      ];


  return (
    <TableContainer component={Paper} variant='outlined'>
      <Table className={classes.table} aria-label="simple table" size='small'>
        <TableBody className={classes.root}>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.values}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
