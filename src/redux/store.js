import { configureStore } from '@reduxjs/toolkit';
import wallSlice from './slices/wallSlice';
import valuesSlice from './slices/valuesSlice';

export default configureStore({
  reducer: {
    walls: wallSlice,
    defaultValues: valuesSlice,
  },
});
