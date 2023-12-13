import React, { useState, useEffect } from 'react';
import editIcon from './public/icons/edit.svg';
import deleteIcon from './public/icons/delete.svg';
import Modal from "./modal";
import './editFavorites.css'; 
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
    
    const [showModal, setShowModal] = useState(false);
    const [editingFavorite, setEditingFavorite] = useState(null);
    const [editedPhotoUrl, setEditedPhotoUrl] = useState('');
    const [editedCaptionText, setEditedCaptionText] = useState('');

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


    const handleEditClick = (favorite) => {
        setEditingFavorite(favorite);
        setEditedPhotoUrl(favorite.photo_url);
        setEditedCaptionText(favorite.caption?.caption_text || '');
        setShowModal(true);
        
      };
    
      const handleModalClose = () => {
        setShowModal(false);
        setEditingFavorite(null);
      };

      const handleEdit = async () => {
        if (!editingFavorite) {
            console.log("No editing favorite selected");
            return;
        }

        // Update the favorite photo URL if it has been changed
        if (editedPhotoUrl !== editingFavorite.photo_url) {
          try {
            const photoResponse = await fetch(`http://localhost:3000/api/favorites/${editingFavorite.photo_id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ photo_url: editedPhotoUrl }),
            });
      
            if (!photoResponse.ok) {
              throw new Error(`HTTP error! status: ${photoResponse.status}`);
            }
          } catch (error) {
            console.error('Error updating photo URL:', error);
            return; // Exit the function if there's an error
          }
        }
      
        // Update the photo caption text if it has been changed and a caption exists
        if (editingFavorite.caption && editedCaptionText !== editingFavorite.caption.caption_text) {
          try {
            const captionResponse = await fetch(`http://localhost:3000/api/captions/${editingFavorite.caption_id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ caption_text: editedCaptionText }),
            });
      
            if (!captionResponse.ok) {
              throw new Error(`HTTP error! status: ${captionResponse.status}`);
            }
          } catch (error) {
            console.error('Error updating caption:', error);
            return; // Exit the function if there's an error
          }
        }
      
        // Update the local state to reflect the changes
        setFavorites(favorites.map(fav => {
          if (fav.photo_id === editingFavorite.photo_id) {
            return {
              ...fav,
              photo_url: editedPhotoUrl,
              caption: fav.caption ? { ...fav.caption, caption_text: editedCaptionText } : null,
            };
          }
          return fav;
        }));
      
        handleModalClose(); // Close the modal after successful edit
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
        <div className="grid">
            {favorites.map(favorite => (
            <Card 
                key={favorite.photo_id} 
                favorite={favorite} 
                onEdit={() => handleEditClick(favorite)}
                onDelete={handleDelete}
            />
            ))}
            <Modal show={showModal} onClose={handleModalClose}>
                <h2>Edit Favorite</h2>
                <input 
                    type="text" 
                    value={editedPhotoUrl} 
                    onChange={(e) => setEditedPhotoUrl(e.target.value)} 
                    placeholder="Photo URL" 
                />
                <input 
                    type="text" 
                    value={editedCaptionText} 
                    onChange={(e) => setEditedCaptionText(e.target.value)} 
                    placeholder="Caption Text" 
                />
                <div className="modal-button-container"><button className="modal-button modal-button-primary" onClick={handleEdit}>Submit Changes</button></div>
                
            </Modal>
      </div>
    );
};

export default EditFavorities;