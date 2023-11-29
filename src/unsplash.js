import React, { useState } from 'react';
import './styles.css';

const Unsplash = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    //fetch images based on input from the api here
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