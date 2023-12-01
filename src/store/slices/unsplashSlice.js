// unsplashSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const unsplashSlice = createSlice({
  name: 'unsplash',
  initialState: {
    searchQuery: '',
    images: [],
    error: null,
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setImages(state, action) {
      state.images = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setSearchQuery, setImages, setError } = unsplashSlice.actions;

export default unsplashSlice.reducer;
