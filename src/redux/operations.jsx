import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://65ce64b7c715428e8b40ac03.mockapi.io/';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://65ce64b7c715428e8b40ac03.mockapi.io/adverts');
      console.log(response.data, 'response.data');
      return response.data;
    } catch (e) {
      console.log(e,'e');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
