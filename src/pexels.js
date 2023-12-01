import React, { useState } from 'react';
import './styles.css';

const Pexels = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);

  const handleSearch = () => {
    const apiKey = 'gikstuGIujwMYIlMaNSq5JrgjML80sNffCYwN8oqS2jWSCNOpmn6I7rj';
    const url = `https://api.pexels.com/videos/search?query=${searchQuery}&per_page=30`;

    fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then(response => response.json())
      .then(data => setVideos(data.videos))
      .catch(error => console.error('Error fetching videos:', error.message));
  };

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