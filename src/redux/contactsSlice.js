import { createSlice, nanoid } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
// const LS_KAY = 'list_contacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  // initialState: JSON.parse(localStorage.getItem(LS_KAY)) ?? [],
  initialState: { dataContacts: [] },
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.dataContacts.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deleteContacts(state, action) {
      const index = state.dataContacts.findIndex(
        contact => contact.id !== action.payload
      );
      state.dataContacts.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
export const contactsReducer = persistReducer(
  {
    key: 'ist_contacts',
    storage,
    blacklist: ['filters'],
  },
  contactsSlice.reducer
);
