import ReactOnRails from 'react-on-rails';

import Contacts from '../bundles/Contacts/components/Contacts';

// This is how react_on_rails can see the Contacts in the browser.
ReactOnRails.register({
  Contacts,
});
