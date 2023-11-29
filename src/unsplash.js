import React, { useState } from 'react';
import './styles.css';

const Unsplash = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your logic for fetching images based on 'searchQuery'
    console.log(`Searching for images with query: ${searchQuery}`);
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
    </div>
  );
};

export default Unsplash;