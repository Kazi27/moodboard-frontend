import React, { useState } from 'react';
import './styles.css';
import { createClient } from 'pexels'; // Import the createClient function from the pexels library

const Pexels = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);

  const handleSearch = () => {
    // Replace 'YOUR_API_KEY' with your actual Pexels API key
    const client = createClient('gikstuGIujwMYIlMaNSq5JrgjML80sNffCYwN8oqS2jWSCNOpmn6I7rj');

    // Make a request to the video search endpoint
    client.videos.search({ query: searchQuery, per_page: 10 }) // Adjust per_page as needed
      .then(response => {
        setVideos(response.videos);
      })
      .catch(error => {
        console.error('Error fetching videos:', error.message);
      });
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