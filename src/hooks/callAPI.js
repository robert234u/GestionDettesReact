import { useContext } from 'react';
import useFetch from './useFetch';
import { ConnectionContext } from './useConnection';

export function useGetFriends() {
  const { connection } = useContext(ConnectionContext);

  let { data } = useFetch(
    `http://localhost:1337/api/friends?populate=*&filters[$or][0][user1][email][$eq]=${connection.email}&filters[$or][1][user2][email][$eq]=${connection.email}`,
    {
      mapData: (rel) => {
        return rel.data.map((relation) => {
          if (relation.attributes.comfirmed) {
            if (
              relation.attributes.user1.data.attributes.email ==
              connection.email
            ) {
              return {
                id: relation.attributes.user2.data.attributes.email,
                firstName: relation.attributes.user2.data.attributes.firstname,
                name: relation.attributes.user2.data.attributes.lastname,
                credit: 0,
              };
            } else {
              return {
                id: relation.attributes.user1.data.attributes.id,
                firstName: relation.attributes.user1.data.attributes.firstname,
                name: relation.attributes.user1.data.attributes.lastname,
                credit: 0,
              };
            }
          }
        });
      },
    }
  ); // donne la liste des amis avec un credit nul

  /* useFetch(
    `http://localhost:1337/api/transactions?populate=*&filters[$or][0][sender][email][$eq]=${connection.email}&filters[$or][1][receiver][email][$eq]=${connection.email}`,
    {
      mapData: (tran) => {
        tran.data.forEach((transaction) => {
          if (
            transaction.attributes.comfirmedByReceiver &&
            transaction.attributes.comfirmedBySender
          ) {
            if (
              transaction.attributes.receiver.data.attributes.email ==
              connection.email
            ) {
              data.forEach((friend) => {
                if (
                  friend.email ==
                  transaction.attributes.sender.data.attributes.email
                ) {
                  friend.credit -= transaction.attributes.amount;
                }
              });
            } else {
              data.forEach((friend) => {
                if (
                  friend.email ==
                  transaction.attributes.receiver.data.attributes.email
                ) {
                  friend.credit += transaction.attributes.amount;
                }
              });
            }
          }
        });
      },
    }
  ); */

  return { data };
}
