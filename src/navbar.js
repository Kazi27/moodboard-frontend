import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/favorites">Favorites</Link>
      <Link to="/photos">Photos</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/">Homepage</Link>
    </div>
  );
};

export default Navbar;