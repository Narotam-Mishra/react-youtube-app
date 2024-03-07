/* eslint-disable react-hooks/exhaustive-deps */
import './PlayVideo.css'
// import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import user_profile from '../../assets/user_profile.jpg'
import { useEffect, useState } from 'react'
import { value_converter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const PlayVideo = () => {

  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const[channelData, setChannelData] = useState(null);
  const[commentData, setCommentData] = useState([]);

  const fetchVideoData = async() => {
    // fetching video's data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`
    await fetch(videoDetails_url).then(response => response.json()).then(data => setApiData(data.items[0]))
  }

  const fetchOtherData = async() => {
    // fetching channel's data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${apiKey}`;
    await fetch(channelData_url).then(response => response.json()).then(data => setChannelData(data.items[0]))

    // fetching comment's Data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${apiKey}`
    await fetch(comment_url).then(response => response.json()).then(data => setCommentData(data.items))

  }

  useEffect(() => {
    fetchVideoData();
  },[videoId])

  useEffect(() => {
    fetchOtherData();
  },[apiData])

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "17K"}{" "}
          Views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt="like logo" />
            {apiData ? value_converter(apiData.statistics.likeCount) : 121}
          </span>
          <span>
            <img src={dislike} alt="dislike logo" />
          </span>
          <span>
            <img src={share} alt="share logo" />
            Share
          </span>
          <span>
            <img src={save} alt="save logo" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt="channel_logo_image"
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Channel Title"}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "19K"}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 251)
            : "Description Here"}
        </p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : 121}{" "}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <>
              <div key={index} className="comment">
                <img
                  src={
                    item.snippet.topLevelComment.snippet.authorProfileImageUrl
                      ? item.snippet.topLevelComment.snippet
                          .authorProfileImageUrl
                      : user_profile
                  }
                  alt="user_profile_image"
                />
                <div>
                  <h3>
                    {item.snippet.topLevelComment.snippet.authorDisplayName
                      ? item.snippet.topLevelComment.snippet
                          .authorDisplayName
                      : "Youtube_User"} <span>{item?moment(item.snippet.topLevelComment.publishedAt).fromNow():"2 days ago"}</span>
                  </h3>
                  <p>
                    {item.snippet.topLevelComment.snippet.textDisplay
                      ? item.snippet.topLevelComment.snippet
                          .textDisplay
                      : "Nice Video"}
                  </p>
                  <div className="comment-action">
                    <img src={like} alt="like icon" />
                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={dislike} alt="dislike icon" />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default PlayVideo