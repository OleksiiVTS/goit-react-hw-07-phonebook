import React from 'react';
import { useContacts } from 'redux/useContacts';

const Filter = () => {
  const { filterContact } = useContacts();
  return (
    <>
      <label>
        <input onChange={evt => filterContact(evt.target.value)} />
      </label>
    </>
  );
};

export default Filter;
