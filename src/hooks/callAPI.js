import { useContext } from 'react';
import useFetch from './useFetch';
import { ConnectionContext } from './useConnection';

export function useGetFriends() {
  const { connection } = useContext(ConnectionContext);

  const { data: friends } = useFetch(
    `http://localhost:1337/api/friends?populate=*&filters[$or][0][user1][email][$eq]=${connection.email}&filters[$or][1][user2][email][$eq]=${connection.email}`,
    {
      mapData: (rel) => {
        let relReturn = [];
        rel.data.forEach((relation) => {
          if (relation.attributes.comfirmed) {
            if (
              relation.attributes.user1.data.attributes.email ==
              connection.email
            ) {
              relReturn.push({
                id: relation.attributes.user2.data.id,
                firstName: relation.attributes.user2.data.attributes.firstname,
                name: relation.attributes.user2.data.attributes.lastname,
                credit: 0,
              });
            } else {
              relReturn.push({
                id: relation.attributes.user1.data.id,
                firstName: relation.attributes.user1.data.attributes.firstname,
                name: relation.attributes.user1.data.attributes.lastname,
                credit: 0,
              });
            }
          }
        });
        return relReturn;
      },
    }
  ); // donne la liste de mes amis avec un credit temporairement nul

  const { data: transactions } = useFetch(
    `http://localhost:1337/api/transactions?populate=*&filters[$or][0][sender][email][$eq]=${connection.email}&filters[$or][1][receiver][email][$eq]=${connection.email}`,
    {
      mapData: (tran) => {
        let tranReturn = [];
        tran.data.forEach((transaction) => {
          if (
            transaction.attributes.comfirmedByReceiver &&
            transaction.attributes.comfirmedBySender
          ) {
            if (
              transaction.attributes.receiver.data.attributes.email ==
              connection.email
            ) {
              tranReturn.push({
                user: transaction.attributes.sender.data.id,
                amont: transaction.attributes.amount * -1,
              });
            } else {
              tranReturn.push({
                user: transaction.attributes.receiver.data.id,
                amont: transaction.attributes.amount,
              });
            }
          }
        });
        return tranReturn;
      },
    }
  ); // donne toutes les transactions qui me conserne

  function GetFriends() {
    if (friends != undefined && transactions != undefined) {
      friends.forEach((friend) => {
        friend.credit = 0;
        transactions.forEach((transaction) => {
          if (friend.id === transaction.user) {
            friend.credit += transaction.amont;
          }
        });
      });
    }
    return friends;
  }

  const friendsWithCredit = GetFriends();

  return { friendsWithCredit };
}

export function useGetRequests() {
  const { connection } = useContext(ConnectionContext);

  const { data } = useFetch(
    `http://localhost:1337/api/friends?populate=*&filters[$and][0][user2][email][$eq]=${connection.email}&filters[$and][1][comfirmed][$eq]=false`,
    {
      mapData: (req) => {
        return req.data.map((request) => {
          return {
            id: request.attributes.user1.data.id,
            firstName: request.attributes.user1.data.attributes.firstname,
            name: request.attributes.user1.data.attributes.lastname,
          };
        });
      },
    }
  );

  return { data };
}

export function useGetTransactionById(id) {
  const { connection } = useContext(ConnectionContext);

  const { data } = useFetch(
    `http://localhost:1337/api/transactions?populate=*&filters[$or][0][$and][0][sender][email][$eq]=${connection.email}&filters[$or][0][$and][1][receiver][id][$eq]=${id}*&filters[$or][1][$and][0][sender][id][$eq]=${id}&filters[$or][1][$and][1][receiver][email][$eq]=${connection.email}`,
    {
      mapData: (tran) => {
        let tranReturn = [];
        tran.data.forEach((transaction) => {
          if (
            transaction.attributes.comfirmedByReceiver &&
            transaction.attributes.comfirmedBySender
          ) {
            if (
              transaction.attributes.receiver.data.attributes.email ==
              connection.email
            ) {
              tranReturn.push({
                amount: transaction.attributes.amount * -1,
                date: transaction.attributes.createdAt,
                id: transaction.id,
              });
            } else {
              tranReturn.push({
                amount: transaction.attributes.amount,
                date: transaction.attributes.createdAt,
                id: transaction.id,
              });
            }
          }
        });
        return tranReturn;
      },
    }
  );

  return { data };
}

export function useGetUserById(id) {
  const { data } = useFetch(
    `http://localhost:1337/api/users?populate=*&filters[id][$eq]=${id}`,
    {
      mapData: (user) => {
        return {
          name: user[0].lastname,
          firstName: user[0].firstname,
        };
      },
    }
  );
  return { data };
}
