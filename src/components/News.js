import React , { useState , useEffect } from 'react'
import NewsCard from './NewsCards'
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Chip } from '@material-ui/core';

function News() {
    const [news, setNews] = useState([]);
    const [newsLoading, setNewsLoading] = useState(true);
    useEffect(() =>{
        axios.get(`https://newsapi.org/v2/everything?q=bitcoin,%20crypto,%20blockchain&language=en&from=2021-08-10&sortBy=popularity&apiKey=7eea8c908a6a4a46893e095322df8b19`)
        .then(res => {
          setNews(res.data.articles)
          setNewsLoading(false)
        })
        .catch(err => console.log(err.message))
      }, [])



    return (
      <div>
        <Chip label={`YC NEWS`} color="primary" style={{ marginTop: 85, fontSize: 20 }}/>  
        {newsLoading ? (
          <CircularProgress style={{ marginTop: 300 }}/>
        ) : (
          news.map((nw) => (
            <NewsCard
              thumbnail={nw.urlToImage}
              title={nw.title}
              author={nw.source.name}
              description={nw.description}
              link={nw.url}
              publishedAt={nw.publishedAt}
            />
          ))
        )}
      </div>
    );
}

export default News
