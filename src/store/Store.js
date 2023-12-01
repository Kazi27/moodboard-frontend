import { configureStore } from '@reduxjs/toolkit';
import unsplashReducer from '../slices/UnsplashSlice'; // Make sure to import the unsplashReducer

// A store is basically a container that holds the state of the entire application.
// In this file, you're creating a redux store using reducers. Each reducer is assigned to a slice of the state.
const Store = configureStore({ 
  reducer: {
    unsplash: unsplashReducer // Add the unsplash reducer here
  },
});

export default Store;
