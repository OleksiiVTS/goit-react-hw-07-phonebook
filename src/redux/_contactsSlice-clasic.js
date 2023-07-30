import { createSlice } from '@reduxjs/toolkit';
import { getApi, addContact, deleteContact } from './operations';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    dataContacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getApi.pending](state, action) {
      state.isLoading = true;
    },
    [getApi.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.dataContacts = action.payload;
    },
    [getApi.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.dataContacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.dataContacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.dataContacts.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
