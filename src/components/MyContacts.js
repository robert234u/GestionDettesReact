import React from 'react';
import MyContact from './MyContact';

function MyContacts({ contacts }) {
  return (
    <div>
      {contacts.map((contact) => (
        <MyContact
          key={contact.id}
          name={contact.name}
          firstName={contact.firstName}
          imagePath={contact.imagePath}
          credit={contact.credit}
        />
      ))}
    </div>
  );
}

export default MyContacts;
