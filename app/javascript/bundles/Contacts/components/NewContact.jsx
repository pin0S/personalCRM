import PropTypes from 'prop-types';
import React from 'react';
import ReactOnRails from 'react-on-rails';

const NewContact = (props) => {
  console.log(props);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <div>
      <h3>NewContact</h3>
      <form method="POST" action={props.action}>
        <label htmlFor="name">Name</label>
        <input type="text" name="contact[name]" id="name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="contact[email]" id="email" />
        <label htmlFor="phone">Phone</label>
        <input type="text" name="contact[phone]" id="phone" />
        <button type="submit"> Create New Contact </button>

        <input
          type="hidden"
          name="authenticity_token"
          value={ReactOnRails.authenticityToken()}
        />
      </form>
    </div>
  );
};

export default NewContact;
