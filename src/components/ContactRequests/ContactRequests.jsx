import React from 'react';
import ContactRequest from './ContactRequest';
import image from '../../assets/avatar.svg';

function ContactRequests({ contacts }) {
  return (
    <div className="gap">
      {contacts.map((contact) => (
        <ContactRequest
          key={contact.id}
          name={contact.name}
          firstName={contact.firstName}
          image={contact.image ? contact.image : image}
        />
      ))}
    </div>
  );
}

export default ContactRequests;
