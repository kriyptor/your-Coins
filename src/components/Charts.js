/* import React , { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';


export default function Charts() {
    const [price, setPrice] = useState([]);
    useEffect(() =>{
        axios.get(`https://api.coingecko.com/api/v3/coins/cardano/market_chart?vs_currency=inr&days=30&interval=daily`)
        .then(res => {
          setPrice(res.data)
          console.log(price['prices'][0][1])
        })
        .catch(err => console.log(err.message))
      }, [])

      const unixConv = (unix) => {
        const timestamp = unix
        const date = new Date(timestamp);
        
        const newDate = `${date.getDate()}/${(date.getMonth()+1)}`
        return newDate
      }
      

  const data = {
    labels: ['1', '2', '3', '4'],
    datasets: [
      {
        label: '# of Votes',
        data: [price['prices'][0][1], price['prices'][1][1], price['prices'][2][1], price['prices'][3][1], price['prices'][4][1]],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }
    return (
    <>
    <div className='header'>
      <h1 className='title'>Line Chart</h1>
      <div className='links'>
      </div>
    </div>
    <Line data={data} />
  </>
);
}

 */