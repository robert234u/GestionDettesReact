import React from 'react';
import CardImageAndName from '../CardWithImage';
import TextButton from '../Button/TextButton';

function ContactRequest({ name, firstName, image }) {
  return (
    <CardImageAndName image={image} className="card">
      <div className="widthMax">
        <p>{firstName + ' ' + name}</p>
        <div className="rowCenter right">
          <TextButton color="red">Decliner</TextButton>
          <TextButton color="green">Accepter</TextButton>
        </div>
      </div>
    </CardImageAndName>
  );
}

export default ContactRequest;
