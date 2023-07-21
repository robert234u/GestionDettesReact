import { useContext } from 'react';
import { ConnectionContext } from '../../context/Connection';

export default function isConnected() {
  const { conection } = useContext(ConnectionContext);
  if (Object.keys(conection).length === 0) {
    return false;
  } else {
    return true;
  }
}
