import React, { useState, useEffect } from 'react';
import editIcon from './public/icons/edit.svg';
import deleteIcon from './public/icons/delete.svg';

const Card = ({ favorite, handleEdit, handleDelete }) => {
return (
    <div className="card">
      <div className="card-icons">
        <img src={editIcon} alt="Edit" className="icon edit-icon" onClick={() => handleEdit(favorite)} />
        <img src={deleteIcon} alt="Delete" className="icon delete-icon" onClick={() => handleDelete(favorite.photo_id)} />
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

    const handleEdit = async () => {
        // Implement the PUT request logic here
    };

    const handleDelete = async (favoriteId) => {
        // Implement the DELETE request logic here
        // After successful deletion, update the state to reflect changes
      };

    return (

        // better name for the file should be
        // ModifyFavorites: both DELETE and PUT requests will be done here

        // card view of favorites with be here along with delete button 
        // or delete icon (DELETE request) and a edit button (PUT request) for each card

        <div>
            <div className="grid">
                {favorites.map(favorite => (
                    <Card 
                        key={favorite.photo_id} 
                        favorite={favorite} 
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default EditFavorities;