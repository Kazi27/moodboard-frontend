import React, { useState } from 'react';
import './styles.css';

const Pexels = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    //fetch videos based on input from the api here
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
    </div>
  );
};

export default Pexels;