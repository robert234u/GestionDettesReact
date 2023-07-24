import React from 'react';
import MyContact from './MyContact';
import image from '../../assets/avatar.svg';

function MyContacts({ contacts }) {
  return (
    <div className="gap">
      {contacts.map((contact) => (
        <MyContact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          firstName={contact.firstName}
          image={contact.image ? contact.image : image}
          credit={contact.credit}
        />
      ))}
    </div>
  );
}

export default MyContacts;
