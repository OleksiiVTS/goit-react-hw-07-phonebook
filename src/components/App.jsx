import React from 'react';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useContacts } from 'redux/useContacts';

const Phonebook = () => {
  const { valueContacts, valueFilters } = useContacts();

  const getVisibleContacts = () => {
    return valueContacts.filter(contact =>
      contact.name.toLowerCase().includes(valueFilters.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={css.appDiv}>
      <section>
        <h1>Phonebook</h1>
        <ContactForm />
      </section>
      <section>
        <h2>Contacts</h2>
        <Filter />
        {visibleContacts.length > 0 && (
          <ContactList listContacts={visibleContacts} />
        )}
      </section>
    </div>
  );
};

export default Phonebook;
