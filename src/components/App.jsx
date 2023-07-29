import React, { useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useContacts } from 'redux/useContacts';
const Phonebook = () => {
  const { visibleContacts, getContacts, isLoading, error } = useContacts();

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <div className={css.appDiv}>
      <section>
        <h1>Phonebook</h1>
        <ContactForm />
      </section>
      <section>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && (
          <Circles
            height="80"
            width="80"
            color="#4d78a9"
            wrapperClass={css.loader}
          />
        )}
        {visibleContacts.length > 0 && (
          <ContactList listContacts={visibleContacts} />
        )}
      </section>
    </div>
  );
};

export default Phonebook;
