import React from 'react';
import { Formik, Field } from 'formik';
import {
  FormBox,
  Label,
  Input,
  BtnSubmit,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/fetchApi';
import { selectContacts } from 'redux/Selectors';

export const ContactForm = () => {
  const initualValues = {
    name: '',
    phone: '',
  };

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleOnSubmit = (values, { resetForm }) => {
    contacts.find(
      contact => values.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${values.name} is already in contacts.`)
      : dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik initialValues={initualValues} onSubmit={handleOnSubmit}>
      <FormBox>
        <Label>Name</Label>
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          as={Input}
          required
        />
        <Label>Number</Label>
        <Field
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          as={Input}
          required
        />
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </FormBox>
    </Formik>
  );
};

