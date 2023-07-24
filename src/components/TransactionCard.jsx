import React from 'react';

export default function TransactionCard({ amount, date, reason }) {
  function formatMyDate(value, locale = 'en-GB') {
    return new Date(value).toLocaleDateString(locale);
  }

  return (
    <div>
      <div className={`${amount < 0 ? 'red' : 'green'} rowCenter separate`}>
        <p>{amount < 0 ? 'DEBIT' : 'CREDIT'}</p>
        <p>{amount < 0 ? amount * -1 : amount} €</p>
      </div>
      <div className="rowCenter separate">
        <p className="smallGrey">{reason}</p>
        <p className="smallGrey">{formatMyDate(date)}</p>
      </div>
    </div>
  );
}
