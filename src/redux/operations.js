import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const endpoint = '/contacts';
axios.defaults.baseURL =
  'https://64c3db8d67cfdca3b6605f50.mockapi.io/OleksiiVTS/goit-react-hw-07-phonebook';

export const getApi = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkAPI) => {
    try {
      const response = await axios.post(endpoint, contacts);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`${endpoint}/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
