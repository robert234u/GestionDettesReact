import React from 'react';
import ContactRequest from './ContactRequest';
import Recommendation from './Recommendation';
import MyContact from './MyContact';

function Contacts({ contacts, typeOfContact }) {
  switch (typeOfContact) {
    case 'ContactRequest':
      <div>
        {contacts.map((contact) => (
          <ContactRequest
            key={contact.id}
            name={contact.name}
            firstName={contact.firstName}
            imagePath={contact.imagePath}
          />
        ))}
      </div>;
      break;
    case 'Recommendation':
      <div>
        {contacts.map((contact) => (
          <Recommendation
            key={contact.id}
            name={contact.name}
            firstName={contact.firstName}
            credit={contact.credit}
            imagePath={contact.imagePath}
          />
        ))}
      </div>;
      break;
    case 'MyContact':
      <div>
        {contacts.map((contact) => (
          <MyContact
            key={contact.id}
            name={contact.name}
            firstName={contact.firstName}
            credit={contact.credit}
            imagePath={contact.imagePath}
          />
        ))}
      </div>;
      break;
    default:
      console.log('Erreur de type de contact');
  }
}

export default Contacts;
