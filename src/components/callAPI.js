import { useContext } from 'react';
import useFetch from '../hooks/useFetch';
import { ConnectionContext } from '../hooks/useConnection';

export function GetFriends() {
  const { connection } = useContext(ConnectionContext);
  const { data } = useFetch(
    `http://localhost:1337/api/transactions?populate=*&filters[sender][email][$eq]=${connection.email}`,
    {
      mapData: (data) => {
        return data;
      },
    }
  );

  return console.log(data);
}

/* let data = useFetch(
  `http://localhost:1337/api/friends?populate=*&filters[$or][0][user1][email][$eq]=${connection.email}&filters[$or][1][user2][email][$eq]=${connection.email}`,
  {
    mapData: (data) => {
      return data;
    },
  }
); */
