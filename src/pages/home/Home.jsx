import Feed from '../../components/Feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import './Home.css'

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </>
  )
}

export default Home