import { useContext } from 'react';
import useFetch from './useFetch';
import { ConnectionContext } from './useConnection';

export function useGetFriends() {
  const { connection } = useContext(ConnectionContext);
  const { data } = useFetch(
    `http://localhost:1337/api/friends?populate=*&filters[$or][0][user1][email][$eq]=${connection.email}&filters[$or][1][user2][email][$eq]=${connection.email}`,
    {
      mapData: (data) => {
        return data.data.map((relation) => {
          if (relation.attributes.comfirmed) {
            if (
              relation.attributes.user1.data.attributes.email ==
              connection.email
            ) {
              return {
                email: relation.attributes.user2.data.attributes.email,
                firstname: relation.attributes.user2.data.attributes.firstname,
                lastname: relation.attributes.user2.data.attributes.lastname,
              };
            } else {
              return {
                email: relation.attributes.user1.data.attributes.email,
                firstname: relation.attributes.user1.data.attributes.firstname,
                lastname: relation.attributes.user1.data.attributes.lastname,
              };
            }
          }
        });
      },
    }
  );

  return { data };
}

/* let data = useFetch(
  `http://localhost:1337/api/transactions?populate=*&filters[sender][email][$eq]=${connection.email}`,
  {
    mapData: (data) => {
      return data;
    },
  }
); */
