import { configureStore } from '@reduxjs/toolkit';
import parliamentReducer from '../slices/ParliamentSlice'; // change this

const Store = configureStore({ 
    reducer: {
      parliament: parliamentReducer,
      congress: congressReducer
    },
  });
  export default Store;