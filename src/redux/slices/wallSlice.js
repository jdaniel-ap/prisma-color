import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  A: {

  },
  B: {

  },
  C: {

  },
  D: {

  },
}

const slice = createSlice({
  name: 'walls',
  initialState,
  reducers: {
    setWallDimentions(state, {payload}) {
      return {...state, ...payload}
    },
  }
});

export const { setWallDimentions } = slice.actions;

export default slice.reducer;
