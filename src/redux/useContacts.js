import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilters,
  getIsLoading,
  getError,
} from './selectors';
import { getApi, addContact, deleteContact } from './operations';
import { setStatusFilter } from './filtersSlice';
import { useCallback } from 'react';

export const useContacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const valueContacts = useSelector(selectContacts);
  const valueFilters = useSelector(selectFilters);

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
    addContacts,
    deleteContacts,
    filterContact,
    getContacts,
  };
};
