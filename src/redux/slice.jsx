import { fetchAdverts } from '../redux/operations';
import { createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const InitialState = {
  list: [],
  isLoading: false,
  error: null,
  filteredList: [],
}

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: InitialState,
  reducers: {
    setFilteredList(state, action) {
      return {
        ...state,
        filteredList: action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload;
        state.filteredList = action.payload;
        console.log(state.filteredList, 'state');
      })
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});
export const { setFilteredList } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
