import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setCarsFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setCarsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
