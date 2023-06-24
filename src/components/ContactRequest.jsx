import React from 'react';
import CardImageAndName from './CardImageAndName';

function ContactRequest({ name, firstName, imagePath }) {
  return (
    <CardImageAndName name={name} firstName={firstName} imagePath={imagePath}>
      <div>
        <button>Décliner</button>
        <button>Accepter</button>
      </div>
    </CardImageAndName>
  );
}

export default ContactRequest;
