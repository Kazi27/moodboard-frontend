import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// Import reducers and other components
import unsplashReducer from './store/slices/unsplashSlice';
import pexelsReducer from './store/slices/pexelsSlice';
import Team from './team';
import TeamMemberDetail from './TeamMemberDetail';
import Homepage from './homepage';
import Unsplash from './unsplash';
import Pexels from './pexels';
import Favorites from './favorites';
import Navbar from './navbar';
import EditFavorites from './editFavorites';
import kazi from './kazi.png';
import george from './george.png';
import david from './david.png';
import rahat from './rahat.png';
const teamMembers = [
  {
    name: 'George Sucuzhañay',
    image: george,
    linkedin: 'https://www.linkedin.com/in/georgesucuzhanay/'
  },
  {
    name: 'Kazi Anwar',
    image: kazi,
    linkedin: 'https://www.linkedin.com/in/kazi/'
  },
  {
    name: 'Rahat Khandokar',
    image: rahat,
    linkedin: 'https://www.linkedin.com/in/rahatkhandokar/'
  },
  {
    name: 'David Abushlaih',
    image: david,
    linkedin:'https://www.linkedin.com/in/david-abushlaih/'
  },
];

// Configure Redux store
const store = configureStore({
  reducer: {
    unsplash: unsplashReducer,
    pexels: pexelsReducer,
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
          <Route path="/edit-favorites" element={<EditFavorites />} />
          <Route path="/team" element={<Team teamMembers={teamMembers} />} />
          <Route path="/team/:memberName" element={<TeamMemberDetail teamMembers={teamMembers} />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
