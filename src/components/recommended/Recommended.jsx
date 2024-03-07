/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import './Recommended.css'

import { useEffect, useState } from 'react'
import { value_converter } from '../../data'
import { Link } from 'react-router-dom';

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const Recommended = ({ categoryId }) => {

  const[apiData, setApiData] = useState([]);

  const fetchData = async() => {
    const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&videoCategoryId=${categoryId}&key=${apiKey}`;
    await fetch(relatedVideoUrl).then(response => response.json()).then(data => setApiData(data.items))
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <>
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
              <img src={item.snippet.thumbnails.medium.url} alt="thumbnail image" />
              <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} Views</p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default Recommended