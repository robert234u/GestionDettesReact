import React from 'react';
import MyContact from './MyContact';

function MyContacts({ contacts }) {
  return (
    <div className="gap">
      {contacts.map((contact) => (
        <MyContact
          key={contact.id}
          name={contact.name}
          firstName={contact.firstName}
          image={contact.image}
          credit={contact.credit}
        />
      ))}
    </div>
  );
}

export default MyContacts;
