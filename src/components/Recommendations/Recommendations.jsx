import React from 'react';
import Recommendation from './Recommendation';
import image from '../../assets/avatar.svg';

function Recommendations({ contacts }) {
  return (
    <div className="gap">
      {contacts.map((contact) => (
        <Recommendation
          key={contact.id}
          name={contact.name}
          firstName={contact.firstName}
          image={contact.image ? contact.image : image}
        />
      ))}
    </div>
  );
}

export default Recommendations;
