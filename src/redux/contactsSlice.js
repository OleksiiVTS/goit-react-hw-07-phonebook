import { createSlice, nanoid } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    dataContacts: [],
    isLoading: false,
    error: null,
  },
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
    // // Виконається в момент старту HTTP-запиту
    // fetchingInProgress(state) {
    //   state.isLoading = true;
    // },
    // // Виконається якщо HTTP-запит завершився успішно
    // fetchingSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },
    // // Виконається якщо HTTP-запит завершився з помилкою
    // fetchingError(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  {
    key: 'ist_contacts',
    storage,
    blacklist: ['filters'],
  },
  contactsSlice.reducer
);
