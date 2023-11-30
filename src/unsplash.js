import React, { useState } from 'react';
import './styles.css';

const Unsplash = () => {
  const [searchQuery, setSearchQuery] = useState(''); //state hooks, prolly change in redux
  const [images, setImages] = useState([]); //array of images

  //when user clicks search button fetch from unspalsh
  const handleSearch = async () => {
    try {
      //maybe put api key in .env?
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=Wp7H7sxUZlVfljqKikdpcey8Dg3b3OjE2TPv9qlGtwk`
      );

      //as per usual
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      //parse
      const data = await response.json();

      //update images from api
      setImages(data.results);
    } catch (error) {
      //console.error('Error fetching images:', error.message); dont log to console in final submission
    }
  };

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