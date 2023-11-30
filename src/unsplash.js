import React, { useState, useEffect } from 'react';
import './styles.css';

const Unsplash = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=Wp7H7sxUZlVfljqKikdpcey8Dg3b3OjE2TPv9qlGtwk`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error.message);
    }
  };

  // useEffect to handle initial load (optional)
  useEffect(() => {
    // You can add code here to fetch initial data when the component mounts
    // For example, fetch popular photos or any default query
  }, []);

  return (
    <div>
      <h1>Unsplash Page (Photos)</h1>
      <input
        type="text"
        placeholder="Search for an image"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="image-container">
        {images.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.description} />
        ))}
      </div>
    </div>
  );
};

export default Unsplash;