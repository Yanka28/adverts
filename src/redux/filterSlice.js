import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  brand: '',
  price: '',
  mileage: ['', ''],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,

  reducers: {
    setBrandFilter(state, action) {
      return {
        ...state,
        brand: action.payload.value,
      };
    },
    setPriceFilter(state, action) {
      return {
        ...state,
        price: action.payload.value,
      };
    },
    setFromFilter(state, action) {
      return {
        ...state,
        mileage: [action.payload, state.mileage[1]],
      };
    },
    setToFilter(state, action) {
      return {
        ...state,
        mileage: [state.mileage[0], action.payload],
      };
    },
  },
});

export const { setBrandFilter, setPriceFilter, setFromFilter, setToFilter } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
