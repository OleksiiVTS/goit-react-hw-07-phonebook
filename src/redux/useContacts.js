import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilters,
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from './selectors';
import { getApi, addContact, deleteContact } from './operations';
import { setStatusFilter } from './filtersSlice';
import { useCallback } from 'react';

export const useContacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const valueContacts = useSelector(selectContacts);
  const valueFilters = useSelector(selectFilters);
  const visibleContacts = useSelector(selectVisibleContacts);

  const getContacts = useCallback(() => dispatch(getApi()), [dispatch]);

  const addContacts = newContact => {
    dispatch(addContact(newContact));
  };

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  const filterContact = updatedTodo => {
    dispatch(setStatusFilter(updatedTodo));
  };

  return {
    isLoading,
    error,
    valueContacts,
    valueFilters,
    visibleContacts,
    addContacts,
    deleteContacts,
    filterContact,
    getContacts,
  };
};
