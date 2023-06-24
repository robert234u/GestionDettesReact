import React from 'react';
import ContactRequest from './ContactRequest';

function ContactRequests({ contacts }) {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactRequest
          key={contact.id}
          name={contact.name}
          firstName={contact.firstName}
          imagePath={contact.imagePath}
        />
      ))}
    </div>
  );
}

export default ContactRequests;
