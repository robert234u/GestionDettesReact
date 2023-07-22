import { useState, useEffect, useContext } from 'react';
import { ConnectionContext } from './useConnection';

export default function useFetch(url, options) {
  const [data, setData] = useState({});
  const { token } = useContext(ConnectionContext);

  const _mapData = options?.mapData || ((data) => data);

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setData(_mapData(data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return { data };
}
