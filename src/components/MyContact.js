import React from 'react';
import CardImageAndName from './CardImageAndName';

function MyContact({ name, firstName, imagePath, credit }) {
  function creditOrDebt(credit) {
    if (credit > 0) {
      return 'Crédit ' + credit + ' €';
    } else if (credit < 0) {
      return 'Dette ' + credit + ' €';
    } else {
      return '';
    }
  }

  return (
    <CardImageAndName name={name} firstName={firstName} imagePath={imagePath}>
      <p>{creditOrDebt(credit)}</p>
      <button>Supprimer</button>
      <button>
        Historique <mark className="goldDollar">$</mark>
      </button>
    </CardImageAndName>
  );
}

export default MyContact;
