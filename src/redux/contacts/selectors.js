export const selectContacts = (state) => state.contacts.items;

export const selectFilter = (state) => state.filters;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;
