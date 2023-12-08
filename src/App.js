// App.js
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import the unsplash and pexels reducers
import unsplashReducer from './store/slices/unsplashSlice'; 
import pexelsReducer from './store/slices/pexelsSlice';

import Homepage from './homepage';
import Unsplash from './unsplash';
import Pexels from './pexels';
import Favorites from './favorites';
import Navbar from './navbar';
import Team from './team'


// configure Redux store for pexels and unsplash reducers
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
          <Route path="/:team" element={<Team />} />
        </Routes>
        <Team />
      </Router>
    </Provider>
  );
}

export default App;