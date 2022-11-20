import { FaUserFriends, FaPhoneAlt } from 'react-icons/fa';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
// import { LS_KEY } from 'constants/localStorageKey';
// import { localStorageGet, localStorageSet } from 'utils/localStorage';

import { Container, Title, ContactsTitle } from './App.styled';

export const App = () => {
  // useEffect(() => {
  //   localStorageSet(LS_KEY, contacts);
  // }, [contacts]);

  return (
    <Container>
      <Title>
        <FaPhoneAlt />
        Phonebook
      </Title>
      <ContactForm />
      <ContactsTitle>
        <FaUserFriends />
        Contacts
      </ContactsTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};
