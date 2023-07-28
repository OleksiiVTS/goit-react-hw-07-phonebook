import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilters } from './selectors';

import * as actions from 'redux/contactsSlice';
import { setStatusFilter } from './filtersSlice';

export const useContacts = () => {
  const dispatch = useDispatch();
  const valueContacts = useSelector(selectContacts);
  const valueFilters = useSelector(selectFilters);

  const addContact = newContact => {
    dispatch(actions.addContacts(newContact));
  };

  const deleteContact = id => {
    dispatch(actions.deleteContacts(id));
  };

  const filterContact = updatedTodo => {
    dispatch(setStatusFilter(updatedTodo));
  };

  return {
    valueContacts,
    valueFilters,
    addContact,
    deleteContact,
    filterContact,
  };
};
