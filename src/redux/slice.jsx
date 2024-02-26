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
  favoritesList:[],
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

    addFavoritesList(state, action) {
      console.log(state.favoritesList ,'favoritesList slice');
         console.log(  action.payload, 'action.payload'   );
      return {
        ...state,
        favoritesList: [...state.favoritesList, action.payload] ,
      
      };
    },
    deleteFavoritesList(state, action) {
       const updatedFavoritesList = state.favoritesList.filter(item => item.id !== action.payload);
  return {
    ...state,
    favoritesList: updatedFavoritesList,
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
         })
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});
export const { setFilteredList, setFavoritesList, deleteFavoritesList, addFavoritesList } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
