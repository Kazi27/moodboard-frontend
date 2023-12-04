import { createSlice } from '@reduxjs/toolkit';

// create a slice for unsplash state
export const unsplashSlice = createSlice({
  name: 'unsplash',
  initialState: {
    searchQuery: '',
    images: []
    },
  reducers: {
    // function to update search query
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    // function to update image data
    setImages(state, action) {
      state.images = action.payload;
    }
  },
});

// exports action and reducer function
export const { setSearchQuery, setImages } = unsplashSlice.actions;

export default unsplashSlice.reducer;
