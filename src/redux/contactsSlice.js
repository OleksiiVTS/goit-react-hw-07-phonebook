import { createSlice } from '@reduxjs/toolkit';
import { getApi, addContact, deleteContact } from './operations';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    dataContacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(
        (getApi.pending, addContact.pending, deleteContact.pending),
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addCase(getApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dataContacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dataContacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.dataContacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.dataContacts.splice(index, 1);
      })
      .addCase(
        (getApi.rejected, addContact.rejected, deleteContact.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
