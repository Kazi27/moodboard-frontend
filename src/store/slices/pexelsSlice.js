import { createSlice } from '@reduxjs/toolkit';


// A slice is created for pexels state
export const pexelsSlice = createSlice({
  name: 'pexels',
  initialState: {
    searchQuery: '', //initial searchQuery is empty 
    videos: [] //initialization of video data to empty
  },
  reducers: {
    setSearchQuery: (state, action) => {
      return { ...state, searchQuery: action.payload };
    },
    setVideos: (state, action) => {
      return { ...state, videos: action.payload };
    }
  },
});

// Exporting action creators and reducer
export const { setSearchQuery, setVideos } = pexelsSlice.actions;

export default pexelsSlice.reducer;
