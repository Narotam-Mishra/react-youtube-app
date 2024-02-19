import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'

const Recommended = () => {
  return (
    <div className='recommended'>
      <div className="side-video-list">
        <img src={thumbnail1} alt="thumbnail image" />
        <div className="vid-info">
          <h4>Best channel that help you to be a Web developer</h4>
          <p>Mernstack</p>
          <p>198k Views</p>
        </div>
      </div>

      <div className="side-video-list">
        <img src={thumbnail2} alt="thumbnail image" />
        <div className="vid-info">
          <h4>Best channel that help you to be a Web developer</h4>
          <p>Mernstack</p>
          <p>198k Views</p>
        </div>
      </div>

      <div className="side-video-list">
        <img src={thumbnail3} alt="thumbnail image" />
        <div className="vid-info">
          <h4>Best channel that help you to be a Web developer</h4>
          <p>Mernstack</p>
          <p>198k Views</p>
        </div>
      </div>

      <div className="side-video-list">
        <img src={thumbnail4} alt="thumbnail image" />
        <div className="vid-info">
          <h4>Best channel that help you to be a Web developer</h4>
          <p>Mernstack</p>
          <p>198k Views</p>
        </div>
      </div>

      <div className="side-video-list">
        <img src={thumbnail5} alt="thumbnail image" />
        <div className="vid-info">
          <h4>Best channel that help you to be a Web developer</h4>
          <p>Mernstack</p>
          <p>198k Views</p>
        </div>
      </div>

      <div className="side-video-list">
        <img src={thumbnail6} alt="thumbnail image" />
        <div className="vid-info">
          <h4>Best channel that help you to be a Web developer</h4>
          <p>Mernstack</p>
          <p>198k Views</p>
        </div>
      </div>

      <div className="side-video-list">
        <img src={thumbnail7} alt="thumbnail image" />
        <div className="vid-info">
          <h4>Best channel that help you to be a Web developer</h4>
          <p>Mernstack</p>
          <p>198k Views</p>
        </div>
      </div>
    </div>
  )
}

export default Recommended