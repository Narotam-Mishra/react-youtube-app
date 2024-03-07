/* eslint-disable react/prop-types */
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const Navbar = ({ setSidebar }) => {
  const [data, setData] = useState([]);
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=0&key=${apiKey}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Filter the data based on the search query
    const filtered = data.filter(item =>
      // Check if item.title is defined before calling toLowerCase()
      item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);


  // Event handler to update the search query state when input changes
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt="menu icon"
        />
        <Link to="/">
          <img className="logo" src={logo} alt="logo icon" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <img src={search_icon} alt="Search icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="upload icon" />
        <img src={more_icon} alt="more icon" />
        <img src={notification_icon} alt="notification icon" />
        <img src={profile_icon} className="user-icon" alt="profile icon" />
      </div>

      <div>
        {/* Render filtered data */}
        {filteredData.map(item => (
          <div key={item.id}>
            {/* Render item details here */}
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar