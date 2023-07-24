import React from 'react';
import CardImageAndName from '../CardWithImage';
import dollar from '../../assets/dollar.svg';
import TextButton from '../Button/TextButton';
import { Link } from 'react-router-dom';

function MyContact({ name, firstName, image, credit, id }) {
  function creditOrDebt(credit) {
    if (credit >= 0) {
      return 'Crédit ' + credit + ' €';
    } else if (credit < 0) {
      return 'Dette ' + credit * -1 + ' €';
    } else {
      return '';
    }
  }

  return (
    <CardImageAndName image={image} className="card">
      <div className="widthMax">
        <div className="rowCenter widthMax separate">
          <p>{firstName + ' ' + name}</p>
          <p className={`${credit < 0 && 'red'} ${credit > 0 && 'green'}`}>
            {creditOrDebt(credit)}
          </p>
        </div>
        <div className="rowCenter widthMax separate">
          <TextButton color="small-red">Supprimer</TextButton>
          <Link to={`/history/${id}`}>
            <TextButton color="primary" className="rowCenter">
              Historique
              <img src={dollar} className="goldDollar" />
            </TextButton>
          </Link>
        </div>
      </div>
    </CardImageAndName>
  );
}

export default MyContact;
