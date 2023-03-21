import Contact from '../bundles/Contacts/components/Contact';
import Contacts from '../bundles/Contacts/components/Contacts';
import NewContact from '../bundles/Contacts/components/NewContact';
import ReactOnRails from 'react-on-rails';

// This is how react_on_rails can see the Contacts in the browser.
ReactOnRails.register({
  Contact,
  Contacts,
  NewContact,
});
