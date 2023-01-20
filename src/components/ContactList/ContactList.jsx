import {
  ContactListBox,
  ContactListItem,
  BtnDelete,
  Text,
} from './Contact.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsByName, selectLoadingStatus } from 'redux/Selectors';
import { deleteContact } from 'redux/FetchApi';
import Loader from 'components/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsByName);
  const isLoading = useSelector(selectLoadingStatus);

  return (
    <ContactListBox>
      {isLoading && <Loader />}
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem key={id}>
          <Text>Name: {name}</Text>
          <Text>Number: {phone}</Text>
          <BtnDelete
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete contact
          </BtnDelete>
        </ContactListItem>
      ))}
    </ContactListBox>
  );
};

