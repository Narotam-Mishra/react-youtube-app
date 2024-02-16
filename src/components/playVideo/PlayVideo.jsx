import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import user_profile from '../../assets/user_profile.jpg'
import jack from '../../assets/jack.png'

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls autoPlay muted></video>
      <h3>Best YouTube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>1673 Views &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt="like logo" />127</span>
          <span><img src={dislike} alt="dislike logo" />2</span>
          <span><img src={share} alt="share logo" />Share</span>
          <span><img src={save} alt="save logo" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="jack image" />
        <div>
          <p>MernStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning Easy</p>
        <p>Sunscribe FreeCodeCamp to watch more Tutorials on Web development</p>
        <hr />
        <h4>123 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="user profile image" />
          <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>A global computer network providing a variety of information and communication of interconnected networks using standarddized communication protocols.</p>
            <div className="comment-action"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo