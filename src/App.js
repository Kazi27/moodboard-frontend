import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import unsplashReducer from './store/slices/unsplashSlice';
import pexelsReducer from './store/slices/pexelsSlice';
import Team from './team'; // Import the Team component

import Homepage from './homepage';
import Unsplash from './unsplash';
import Pexels from './pexels';
import Favorites from './favorites';
import Navbar from './navbar';
import EditFavorities from './editFavorites';

// Configure Redux store
const store = configureStore({
  reducer: {
    unsplash: unsplashReducer,
    pexels: pexelsReducer
  },
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/photos" element={<Unsplash />} />
          <Route path="/videos" element={<Pexels />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/edit-favorites" element={<EditFavorities />} />
          <Route path="/team" element={<Team />} /> {/* This line added for /team route */}
          {/* Add other specific routes as needed */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
