import { configureStore } from '@reduxjs/toolkit';
import unsplashReducer from './slices/UnsplashSlice';
import pexelsReducer from './slices/pexelsSlice';

const store = configureStore({
  reducer: {
    pexels: pexelsReducer,
    unsplash: unsplashReducer
  }
});

export default store;

