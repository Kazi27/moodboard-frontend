import React from 'react';
import './homepage.css'; // Make sure the path is correct
import Team from './team'; // Import the Team component

const Homepage = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to Our Moodboard</h1>
      <Team /> {/* Include the Team component here */}
    </div>
  );
};

export default Homepage;
