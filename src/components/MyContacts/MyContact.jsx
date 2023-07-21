import React from 'react';
import CardImageAndName from '../CardWithImage';
import dollar from '../../assets/dollar.svg';
import TextButton from '../Button/TextButton';

function MyContact({ name, firstName, image, credit }) {
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
    <CardImageAndName image={image} className="card">
      <div className="widthMax">
        <div className="rowCenter widthMax separate">
          <p>{firstName + ' ' + name}</p>
          <p>{creditOrDebt(credit)}</p>
        </div>
        <div className="rowCenter widthMax separate">
          <TextButton color="small-red">Supprimer</TextButton>
          <TextButton color="primary" className="rowCenter">
            Historique
            <img src={dollar} className="goldDollar" />
          </TextButton>
        </div>
      </div>
    </CardImageAndName>
  );
}

export default MyContact;
