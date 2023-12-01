// import React, { useState } from 'react';




// import './styles.css';

// const Unsplash = () => {
//   const [searchQuery, setSearchQuery] = useState(''); //state hooks, prolly change in redux
//   const [images, setImages] = useState([]); //array of images

//   //when user clicks search button fetch from unspalsh
//   const handleSearch = async () => {
//     try {
//       //maybe put api key in .env?
//       const response = await fetch(
//         `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&per_page=30&client_id=Wp7H7sxUZlVfljqKikdpcey8Dg3b3OjE2TPv9qlGtwk`
//       );

//       //as per usual
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       //parse
//       const data = await response.json();

//       //update images from api
//       setImages(data.results);
//     } catch (error) {
//       //console.error('Error fetching images:', error.message); dont log to console in final submission
//     }
//   };

//   return (
//     <div>
//       <h1>Unsplash Page (Photos)</h1>
//       <input
//         type="text"
//         placeholder="Search images"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       <div className="image-container">
//         {images.map((image) => (
//           <div key={image.id} className="image-item">
//             <img src={image.urls.small} alt={image.description} />
//             <p className="caption">{image.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Unsplash;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setImages, setError } from './store/slices/unsplashSlice'; // Import your action creators from unsplashSlice

const Unsplash = () => {
  const searchQuery = useSelector((state) => state.unsplash.searchQuery);
  const images = useSelector((state) => state.unsplash.images);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&per_page=30&client_id=Wp7H7sxUZlVfljqKikdpcey8Dg3b3OjE2TPv9qlGtwk`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Dispatch actions to update Redux state instead of using setImages
      dispatch(setImages(data.results));
      dispatch(setError(null)); // Clear any previous errors
    } catch (error) {
      // Dispatch the error using setError action
      dispatch(setError(error.message));
    }
  };

  const handleInputChange = (e) => {
    // Dispatch setSearchQuery action to update searchQuery in Redux state
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div>
      <h1>Unsplash Page (Photos)</h1>
      <input
        type="text"
        placeholder="Search images"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="image-container">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.urls.small} alt={image.description} />
            <p className="caption">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unsplash;
