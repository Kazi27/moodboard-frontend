import React, { useState, useEffect } from 'react';

const Favorites = () => {
  // State to hold the fetched favorite images
  const [favorites, setFavorites] = useState([]);

  // Function to fetch favorite images from the backend
  const fetchFavorites = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/favorites');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFavorites(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Use useEffect to call fetchFavorites when the component mounts
  useEffect(() => {
    fetchFavorites();
  }, []); // The empty array ensures this effect runs once on mount

  return (
    <div>
      <h1>Favorites Page</h1>
      <h2>Store images that are favorited here</h2>
      <div>
        {favorites.map(favorite => (
          <div key={favorite.photo_id}>
            <img src={favorite.photo_url} alt={`Favorite ${favorite.photo_id}`} />
            {/* Additional favorite data can be displayed here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
