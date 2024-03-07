/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import './Feed.css'

import { Link } from 'react-router-dom'
import { value_converter } from '../../data'
import { useEffect, useState } from 'react'
import moment from 'moment'

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const Feed = ({ category }) => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${apiKey}`;
    await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))
  }

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed" key={data.id}>
      {data.map((item, index) => (
        <Link
          key={index}
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className="card"
        >
          <img
            src={item.snippet.thumbnails.medium.url}
            alt="thumbnail_image1"
          />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {value_converter(item.statistics.viewCount)} views &bull;{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed