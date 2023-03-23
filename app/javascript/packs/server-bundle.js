import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorldServer';
import Contact from '../bundles/Contacts/components/Contact';
import Contacts from '../bundles/Contacts/components/Contacts';
import NewContact from '../bundles/Contacts/components/NewContact';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Contact,
  Contacts,
  NewContact,
});
