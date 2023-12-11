import React from 'react';
import './homepage.css'; // Make sure the path is correct
import Team from './team'; // Import the Team component

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Other content of the homepage */}
      <Team /> {/* This will now be at the bottom */}
    </div>
  );
};
export default Homepage;
