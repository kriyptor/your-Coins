import React , { useState , useEffect } from 'react'
import NewsCard from './NewsCards'
import axios from 'axios';
import { Chip } from '@material-ui/core';

function News() {
    const [news, setNews] = useState([]);
    const [newsLoading, setNewsLoading] = useState(true);
    useEffect(() => {
      const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q: 'cryptocurrency , blockchain', lang: 'en'},
        headers: {
          'x-rapidapi-key': '52493168cemshf14b3e84c2cf819p17c027jsn278990ff1832',
          'x-rapidapi-host': 'free-news.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        setNews(response.data.articles);
        setNewsLoading(false)
      }).catch(function (error) {
        console.error(error);
      });
    }, [])



    return (
      <div>
        {newsLoading ? (
           <Chip label={`Loading The News...`} color="primary" style={{ marginTop: 85, fontSize: 20 }}/>  
        ) : (
          <>
          <Chip label={`YC NEWS BY NEWSCATCHER`} color="primary" style={{ marginTop: 85, fontSize: 15 }}/>  
        {news.map((nw) => (
          <NewsCard
            thumbnail={nw.media}
            title={nw.title}
            author={nw.clean_url}
            description={nw.summary}
            link={nw.link}
            publishedAt={nw.published_date}
          />
        ))}
        </>
        )}
      </div>
    );
}

export default News
