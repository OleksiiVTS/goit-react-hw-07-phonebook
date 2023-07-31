import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
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
      .addMatcher(
        isAnyOf(isPending(getApi, addContact, deleteContact)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(isRejected(getApi, addContact, deleteContact)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(isFulfilled(getApi, addContact, deleteContact)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

// const extraActions = [getApi, addContact, deleteContact];
// const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

export const contactsReducer = contactsSlice.reducer;
