import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorldServer';
import Contacts from '../bundles/Contacts/components/ContactsServer';
import NewContacts from '../bundles/Contacts/components/NewContactServer';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Contacts,
  NewContacts,
});
