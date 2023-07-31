import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
      .addCase(getApi.fulfilled, (state, action) => {
        state.dataContacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.dataContacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.dataContacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.dataContacts.splice(index, 1);
      })
      .addMatcher(isAnyOf(getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(getActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

const extraActions = [getApi, addContact, deleteContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

export const contactsReducer = contactsSlice.reducer;
