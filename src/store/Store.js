import { configureStore } from '@reduxjs/toolkit';
// importing from pexels and unsplash slices
import unsplashReducer from './slices/UnsplashSlice';
import pexelsReducer from './slices/pexelsSlice';

// create a redux store for use in our website with a pexelsReducer and unsplashReducer
const store = configureStore({
  reducer: {
    pexels: pexelsReducer,
    unsplash: unsplashReducer
  }
});

// exporting the store
export default store;

