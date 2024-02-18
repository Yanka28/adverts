import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65ce64b7c715428e8b40ac03.mockapi.io/';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (num, thunkAPI) => {
    try {
      console.log(num,'fetch');
      const response = await axios.get(`/adverts?page=${num}&limit=12`);
       return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


