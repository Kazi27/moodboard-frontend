// App.js
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import unsplashReducer from './store/slices/unsplashSlice'; // Import the unsplash reducer
import Homepage from './homepage';
import Unsplash from './unsplash';
import Pexels from './pexels';
import Favorites from './favorites';
import Navbar from './navbar';
import EditFavorities from './editFavorites';

const store = configureStore({
  reducer: {
    unsplash: unsplashReducer,
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
          <Route path="/edit-favorites" element={<EditFavorities/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
