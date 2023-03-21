import PropTypes from 'prop-types';
import React from 'react';

const Contacts = (props) => {
  console.log(props);

  return (
    <div>
      <h3>Contacts</h3>
      <ul>
        {props.contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
