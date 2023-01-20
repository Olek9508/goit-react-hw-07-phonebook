import { BtnDelete, Text } from './Contact.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsByName, selectLoadingStatus } from 'redux/Selectors';
import { deleteContact } from 'redux/fetchApi';
import { Loader } from 'components/Loader/SpinningLoader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsByName);
  const isLoading = useSelector(selectLoadingStatus);

  return (
    <div>
      {isLoading && <Loader />}
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
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
        </li>
      ))}
    </div>
  );
};

