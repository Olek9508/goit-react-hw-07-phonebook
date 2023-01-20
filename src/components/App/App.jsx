import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Container, InnerContainer } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/FetchApi';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <InnerContainer>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
          <ContactList />
          </InnerContainer>
      </Container>
    </>
  );
};
