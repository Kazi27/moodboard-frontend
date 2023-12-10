import React, { useState, useEffect } from 'react';
import editIcon from './public/icons/edit.svg';
import deleteIcon from './public/icons/delete.svg';

const Card = ({ favorite, onEdit, onDelete }) => {

    return (
        <div className="card">
        <div className="card-icons">
            <img src={editIcon} alt="Edit" className="icon edit-icon" onClick={() => onEdit(favorite)} />
            <img src={deleteIcon} alt="Delete" className="icon delete-icon" onClick={() => onDelete(favorite.photo_id)} />
        </div>
        <img src={favorite.photo_url} alt={`Favorite ${favorite.photo_id}`} className="card-image" />
        <p className="card-caption">{favorite.caption?.caption_text}</p>

        
        </div>
    );
};


const EditFavorities = () => {
    const [favorites, setFavorites] = useState([]);
  
    // Function to fetch favorite images and their captions from the backend
    const fetchFavorites = async () => {
        try {
        const response = await fetch('http://localhost:3000/api/favorites-with-captions');
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


    const handleEdit = async (favorite) => {
        // Prompt for new photo URL
        const newPhotoUrl = prompt('Enter the new photo URL:', favorite.photo_url);
      
        // Check and update photo URL if different
        if (newPhotoUrl && newPhotoUrl !== favorite.photo_url) {
          try {
            const photoResponse = await fetch(`http://localhost:3000/api/favorites/${favorite.photo_id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ photo_url: newPhotoUrl }),
            });
      
            if (!photoResponse.ok) {
              throw new Error(`HTTP error! status: ${photoResponse.status}`);
            }
      
            // Update photo_url in the local state
            setFavorites(favorites.map(fav => {
              if (fav.photo_id === favorite.photo_id) {
                return { ...fav, photo_url: newPhotoUrl };
              }
              return fav;
            }));
      
          } catch (error) {
            console.error('Error updating photo URL:', error);
          }
        }
      
        // Check if the favorite has a caption and the caption has an ID
        if (favorite.caption && typeof favorite.caption_id !== 'undefined') {
          const newCaptionText = prompt('Enter the new caption text:', favorite.caption.caption_text);
      
          if (newCaptionText !== null && newCaptionText !== favorite.caption.caption_text) {
            try {
      
              const captionResponse = await fetch(`http://localhost:3000/api/captions/${favorite.caption_id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ caption_text: newCaptionText }),
              });
      
              if (!captionResponse.ok) {
                throw new Error(`HTTP error! status: ${captionResponse.status}`);
              }
      
              // Update caption_text in the local state
              setFavorites(favorites.map(fav => {
                if (fav.photo_id === favorite.photo_id) {
                  return {
                    ...fav,
                    caption: {
                      ...fav.caption,
                      caption_text: newCaptionText,
                    },
                  };
                }
                return fav;
              }));
      
            } catch (error) {
              console.error('Error updating caption:', error);
            }
          }
        } else {
          console.error('Caption or caption ID is undefined. Favorite object:', favorite);
        }
      };
      
      
      
      

      const handleDelete = async (photoId) => {
        if (window.confirm('Are you sure you want to delete this favorite?')) {
          try {
            const response = await fetch(`http://localhost:3000/api/favorites/${photoId}`, {
              method: 'DELETE',
            });
    
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Remove the deleted favorite from the state
            setFavorites(favorites.filter(favorite => favorite.photo_id !== photoId));
          } catch (error) {
            console.error('Error deleting data:', error);
          }
        }
      };

    return (

        // better name for the file should be ModifyFavorites: both DELETE and PUT requests will be done here
        <div>
            <div className="grid">
                {favorites.map(favorite => (
                    
                    <Card 
                        key={favorite.photo_id} 
                        favorite={favorite} 
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        
                    />
                    
                ))}
            </div>
        </div>
    );
};

export default EditFavorities;