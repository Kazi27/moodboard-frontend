import { createSlice } from '@reduxjs/toolkit';

export const pexelsSlice = createSlice({
  name: 'pexels',
  initialState: {
    searchQuery: '',
    videos: [],
    error: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      return { ...state, searchQuery: action.payload };
    },
    setVideos: (state, action) => {
      return { ...state, videos: action.payload };
    },
    setError: (state, action) => {
      return { ...state, error: action.payload };
    },
  },
});

export const { setSearchQuery, setVideos, setError } = pexelsSlice.actions;

export default pexelsSlice.reducer;
