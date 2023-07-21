import { React, createContext, useEffect, useState } from 'react';

export const ConnectionContext = createContext();

const TOKEN_CACHE_KEY = 'token';
const USER_CACHE_KEY = 'user';

export const ConnectionProvider = ({ children }) => {
  const [connection, setConnection] = useState(
    localStorage.getItem(USER_CACHE_KEY)
      ? JSON.parse(localStorage.getItem(USER_CACHE_KEY))
      : {}
  );
  const [token, setToken] = useState(
    localStorage.getItem(TOKEN_CACHE_KEY) || undefined
  );
  const createConnection = ({ name, firstName, email }) => {
    setConnection({
      name: name,
      firstName: firstName,
      email: email,
    });
  };
  const logout = () => {
    setConnection({});
    setToken();
    localStorage.clear();
  };
  function isAuth() {
    return Object.keys(connection).length !== 0;
  }

  useEffect(() => {
    if (token) {
      localStorage.setItem(TOKEN_CACHE_KEY, token);
    }
    if (connection) {
      localStorage.setItem(USER_CACHE_KEY, JSON.stringify(connection));
    }
  }, [token, connection]);

  return (
    <ConnectionContext.Provider
      value={{ connection, createConnection, logout, isAuth, token, setToken }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};
