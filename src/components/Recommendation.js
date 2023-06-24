import React from 'react';
import CardImageAndName from './CardImageAndName';

function Recommendation({ name, firstName, imagePath }) {
  return (
    <CardImageAndName name={name} firstName={firstName} imagePath={imagePath}>
      <button>Ajouter</button>
    </CardImageAndName>
  );
}

export default Recommendation;
