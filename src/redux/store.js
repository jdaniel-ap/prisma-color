import { configureStore } from '@reduxjs/toolkit';
import wallSlice from './slices/wallSlice';

export default configureStore({
  reducer: {
    walls: wallSlice,
  },
});
