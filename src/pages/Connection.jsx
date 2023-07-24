import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ConnectionContext } from '../hooks/useConnection';

import LabelAndInput from '../components/LabelAndInput';
import Button from '../components/Button/Button';

function Connection() {
  const { createConnection, setToken } = useContext(ConnectionContext);
  const navigate = useNavigate();
  const [status, setStatus] = useState(200);

  async function login(identifier, password) {
    try {
      const response = await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        body: JSON.stringify({ identifier, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setStatus(response.status);
      if (!data.error) {
        setToken(data.jwt);
        createConnection({
          name: data.user.lastname,
          firstName: data.user.firstname,
          email: data.user.email,
        });

        navigate('/');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  function errorDisplay() {
    if (status === 400) {
      return <p className="red">Email ou mot de passe erroné !</p>;
    } else if (status === 'error') {
      return <p className="red">Probleme de connexion !</p>;
    } else if (status !== 200) {
      return <p className="red">Il y a un probleme !</p>;
    }
  }

  function handelSubmit(e) {
    e.preventDefault();
    login(e.target.email.value, e.target.password.value);
  }
  return (
    <div className="pageCenter">
      {errorDisplay()}
      <form onSubmit={handelSubmit} className="columnCenter">
        <LabelAndInput
          type="email"
          name="email"
          id="email"
          placeholder="Ex. nom.prenom@gmail.com"
          autoFocus
          label="Email"
        />
        <LabelAndInput
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe secret"
          label="Mot de passe"
        />
        <Button type="submit" style="primary">
          Connexion
        </Button>
      </form>
      <p>-- ou --</p>
      <Link to="/register">
        <Button style="secondary">Ceer un compte</Button>
      </Link>
    </div>
  );
}

export default Connection;
