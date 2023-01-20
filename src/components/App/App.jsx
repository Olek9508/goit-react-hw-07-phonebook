import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Container,TitleOne,TitleTwo } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/fetchApi';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <TitleOne>Phonebook</TitleOne>
        <ContactForm />
        <TitleTwo>Contacts</TitleTwo>
        <Filter />
          <ContactList />
      </Container>
    </>
  );
};
