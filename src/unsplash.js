import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setImages } from './store/slices/unsplashSlice';

const Unsplash = () => {
  // Selectors to get data from the Redux store
  const searchQuery = useSelector((state) => state.unsplash.searchQuery);
  const images = useSelector((state) => state.unsplash.images);
  const dispatch = useDispatch();

  // Function which handles image retrieval based on search
  const handleSearch = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&per_page=30&client_id=Wp7H7sxUZlVfljqKikdpcey8Dg3b3OjE2TPv9qlGtwk`
    );
    const data = await response.json();

    // Action which updates Redux state with fetched images
    dispatch(setImages(data.results));
  };

  // Function to handle input change and update the search query.
  const handleInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div>
      <h1>Unsplash Page (Photos)</h1>
      {/* Input field to search for images*/}
      <input
        type="text"
        placeholder="Search images"
        value={searchQuery}
        onChange={handleInputChange}
      />
      {/* Button to handle the image search */}
      <button onClick={handleSearch}>Search</button>

      {/* Container to display images */}
      <div className="image-container">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            {/* Display each image */}
            <img src={image.urls.small} alt={image.description} />
            {/* Display the image description */}
            <p className="caption">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unsplash;
