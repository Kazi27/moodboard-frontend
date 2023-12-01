import React, { useState } from 'react';
import './styles.css';

const Pexels = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);

  const handleSearch = () => {
    const apiKey = 'gikstuGIujwMYIlMaNSq5JrgjML80sNffCYwN8oqS2jWSCNOpmn6I7rj';
    const url = `https://api.pexels.com/videos/search?query=${searchQuery}&per_page=10`;

    fetch(url, {
      headers: {
        Authorization: apiKey, //this was the authorization the pexels api needed AS A HEADER!
      },
    })
      .then(response => response.json())
      .then(data => setVideos(data.videos))
      //.catch(error => console.error('Error fetching videos:', error.message)); //take out in final version
  };

  //for the return, the only equivalent thing to captions is the user so i return that too
  return (
    <div>
      <h1>Pexels Page (Videos)</h1>
      <input
        type="text"
        placeholder="Search for a video"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="video-container">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <video controls width="100%">
              <source src={video.video_files[0].link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pexels;