import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts;
export const selectLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;
// export const selectFilter = state => state.filter;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.list.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
