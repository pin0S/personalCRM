import PropTypes from 'prop-types';
import React from 'react';

const Contact = (props) => {
  console.log(props);

  return (
    <div>
      <h3>{props.contact.name}</h3>
      <p>email: {props.contact.email}</p>
      <p>phone: {props.contact.phone}</p>
    </div>
  );
};

export default Contact;
