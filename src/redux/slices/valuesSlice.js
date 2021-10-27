import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doorDimension: {
    width: 0.8,
    height: 1.9,
    area: 1.9 * 0.8
  },
  windowDimension: {
    width: 2,
    height: 1.2,
    area: 2 * 1.2
  }
}

const slice = createSlice({
  name: 'walls',
  initialState,
});

export default slice.reducer;
