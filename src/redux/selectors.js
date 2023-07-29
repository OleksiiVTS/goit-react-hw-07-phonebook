import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.dataContacts;
export const selectFilters = state => state.filters;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
