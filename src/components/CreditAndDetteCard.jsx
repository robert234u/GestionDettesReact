import React from 'react';

export default function CreditAndDetteCard({ transactions }) {
  let dette = 0;
  let credit = 0;

  if (transactions !== undefined) {
    transactions.forEach((transaction) => {
      if (transaction.amount > 0) {
        credit += transaction.amount;
      } else {
        dette -= transaction.amount;
      }
    });
  }

  return (
    <div className="card gap">
      <div className="green rowCenter separate">
        <p>CREDIT</p>
        <p>{credit} €</p>
      </div>
      <div className="red rowCenter separate">
        <p>DETTE</p>
        <p>{dette} €</p>
      </div>
    </div>
  );
}
