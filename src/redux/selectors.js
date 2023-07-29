export const selectContacts = state => state.contacts.dataContacts;
export const selectFilters = state => state.filters;

export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
