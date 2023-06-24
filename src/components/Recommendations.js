import React from 'react';
import Recommendation from './Recommendation';

function Recommendations({ contacts }) {
  return (
    <div>
      {contacts.map((contact) => (
        <Recommendation
          key={contact.id}
          name={contact.name}
          firstName={contact.firstName}
          imagePath={contact.imagePath}
        />
      ))}
    </div>
  );
}

export default Recommendations;
