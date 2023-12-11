import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setImages } from './store/slices/unsplashSlice';
import Modal from './modal';
import hearticon from './public/icons/hearticon.svg';
import greyHeartIcon from './public/icons/greyHeartIcon.svg';

const Unsplash = () => {
  // Selectors to get data from the Redux store
  const searchQuery = useSelector((state) => state.unsplash.searchQuery);
  const images = useSelector((state) => state.unsplash.images);
  const dispatch = useDispatch();
  

  const checkFavorites = async (unsplashImages) => {
    const response = await fetch('http://localhost:3000/api/check-favorites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urls: unsplashImages.map(img => img.urls.small) }),
    });

    const favoritedUrls = await response.json();
    return unsplashImages.map(img => ({
        ...img,
        isFavorited: favoritedUrls.includes(img.urls.small),
    }));
};

  // Function which handles image retrieval based on search
  const handleSearch = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&per_page=30&client_id=Wp7H7sxUZlVfljqKikdpcey8Dg3b3OjE2TPv9qlGtwk`
    );
    const data = await response.json();
    const imagesWithFavorites = await checkFavorites(data.results);
    // Action which updates Redux state with fetched images
    dispatch(setImages(imagesWithFavorites));
  };

  // Function to handle input change and update the search query.
  const handleInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  

  const [showModal, setShowModal] = useState(false);
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleHeartClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCaption('');
  };

  const handleSubmit = async () => {
    if (!selectedImage || !caption) return;
  
    // Combine the data for the favorite photo and the caption
    const favoriteAndCaptionData = {
        photo_url: selectedImage.urls.small,
        caption_text: caption, // Send the caption text along with the favorite data
    };
  
    try {
      // Make a single POST request to create both the favorite and the caption
      const response = await fetch('http://localhost:3000/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(favoriteAndCaptionData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      console.log('Favorite and caption created successfully');
  
      // Close the modal and reset state
      handleModalClose();
    } catch (error) {
      console.error('Error submitting new favorite and caption:', error);
    }
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
            <img 
              src={image.isFavorited ? hearticon : greyHeartIcon} 
              alt="Favorite" 
              className='heart-icon' 
              onClick={() => handleHeartClick(image)} 
            />
            {/* Display the image description */}
            <p className="caption">{image.description}</p>
          </div>
        ))}
      </div>
      
      <Modal show={showModal} onClose={handleModalClose}>
        <div>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Enter a caption for your favorite photo"
            className="modal-input"
          />
          <div className="modal-button-container">
            <button className="modal-button modal-button-primary" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default Unsplash;
