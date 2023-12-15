import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// Import your reducers and other components
import unsplashReducer from './store/slices/unsplashSlice';
import pexelsReducer from './store/slices/pexelsSlice';
import Team from './team';
import TeamMemberDetail from './TeamMemberDetail'; // Import the TeamMemberDetail component
import Homepage from './homepage';
import Unsplash from './unsplash';
import Pexels from './pexels';
import Favorites from './favorites';
import Navbar from './navbar';
import EditFavorities from './editFavorites';

// Your team members data, which should be passed to Team and TeamMemberDetail components
const teamMembers = [
  // ... your team members data ...
];

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
          <Route path="/team" element={<Team teamMembers={teamMembers} />} />
          <Route path="/team/:memberName" element={<TeamMemberDetail teamMembers={teamMembers} />} />
          {/* Add other specific routes as needed */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
