import React from 'react';
import ContactRequest from './ContactRequest';

function ContactRequests({ contacts }) {
  return (
    <div className="gap">
      {contacts.map((contact) => (
        <ContactRequest
          key={contact.id}
          name={contact.name}
          firstName={contact.firstName}
          image={contact.image}
        />
      ))}
    </div>
  );
}

export default ContactRequests;
