import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wall_a: {

  },
  wall_b: {

  },
  wall_c: {

  },
  wall_d: {

  },
}

const slice = createSlice({
  name: 'walls',
  initialState,
  reducers: {
    setWallDimentions(state, {payload}) {
      return {...state, payload}
    },
  }
});

export const { setWallDimentions } = slice.actions;

export default slice.reducer;
