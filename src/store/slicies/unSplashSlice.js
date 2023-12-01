import { createSlice } from '@reduxjs/toolkit';

//this file is pretty similar to congressslice.js except the selector, u use createSlice to define a portion of the Redux state named 'parliament' w/ initial state & reducers
//next up u have ur reducers (setMemberInfo, setInterests, setError) that define how the state is updated to different actions
//they modify the state based on the provided payload and then you export this, could've used a selector here too tbh
const parliamentSlice = createSlice({
  name: 'parliament',
  initialState: {
    memberInfo: null,
    interests: [],
    error: null,
  },
  reducers: {
    setMemberInfo(state, action) {
      state.memberInfo = action.payload;
      state.error = null;
    },
    setInterests(state, action) {
      state.interests = action.payload;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setMemberInfo, setInterests, setError } = parliamentSlice.actions;
export default parliamentSlice.reducer;