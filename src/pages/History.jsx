import React from 'react';
import Header from '../components/Header/Header';
import { useParams } from 'react-router-dom';
import { useGetTransactionById, useGetUserById } from '../hooks/callAPI';
import TransactionCard from '../components/TransactionCard';
import image from '../assets/avatar.svg';
import CreditAndDetteCard from '../components/CreditAndDetteCard';

export default function History() {
  const { id } = useParams();
  const { data: transactions } = useGetTransactionById(id);
  const { data: user } = useGetUserById(id);

  function giveTransactions() {
    if (transactions !== undefined) {
      return transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          amount={transaction.amount}
          date={transaction.date}
          reason="j'ai pas fait"
        />
      ));
    }
  }

  function giveUser() {
    if (user != undefined) {
      return (
        <div className="rowCenter">
          <img src={user.image ? user.image : image} className="avatar" />
          <p>
            Historique {user.firstName} {user.name}
          </p>
        </div>
      );
    }
  }

  return (
    <div className="gap">
      <Header />
      <div className="padding gap">
        <CreditAndDetteCard transactions={transactions} />
        {giveUser()}
        {giveTransactions()}
      </div>
    </div>
  );
}
