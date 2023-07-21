import React from 'react';
import CardImageAndName from '../CardWithImage';
import TextButton from '../Button/TextButton';

function Recommendation({ name, firstName, image }) {
  return (
    <CardImageAndName image={image}>
      <div className="rowCenter widthMax separate">
        <p>{firstName + ' ' + name}</p>
        <TextButton color="green">Ajouter</TextButton>
      </div>
    </CardImageAndName>
  );
}

export default Recommendation;
